var sitName = document.getElementById("Site-Name");
var sitUrl = document.getElementById("url");
var submitBtn = document.getElementById("submitBtn");
var infoBox = document.getElementById("infoBox");
var closeBtn = document.getElementById("closeBtn");
var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function addBookmark() {
  var name = sitName.value.trim();
  var url = sitUrl.value.trim();

  // Reset validation classes
  sitUrl.classList.remove('url-valid', 'url-invalid');

  // Validate inputs
  if (name === "" || url === "") {
    infoBox.classList.remove("d-none");
    return;
  }

  // Validate URL format
  if (!isValidUrl(url) ) {
    sitUrl.classList.add('url-invalid');
    infoBox.classList.remove("d-none");
    return;
    }

  // Mark URL as valid
  sitUrl.classList.add('url-valid');

  // Add http:// if missing
  if (!url.match(/^https?:\/\//i)) {
    url = "http://" + url;
  }

  var bookmark = {
    name: name,
    url: url
  };

  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  displayBookmarks();
  clearInputs();
}

function displayBookmarks() {
  const tableBody = document.getElementById("bookmarkList");
  tableBody.innerHTML = "";
  
  bookmarks.forEach(function(bookmark, index) {
    const row = document.createElement("tr");
    
    // Index column
    const indexCell = document.createElement("td");
    indexCell.textContent = index + 1;
    
    // Name column
    const nameCell = document.createElement("td");
    nameCell.textContent = bookmark.name;
    
    // Visit column
    const visitCell = document.createElement("td");
    const visitButton = document.createElement("button");
    visitButton.className = "btn btn-visit";
    visitButton.innerHTML = `<i class="fas fa-external-link-alt"></i> Visit`;
    visitButton.onclick = function() {
      visitBookmark(bookmark.url);
    };
    visitCell.appendChild(visitButton);
    
    // Delete column
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-delete";
    deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i> Delete`;
    deleteButton.onclick = function() {
      deleteBookmark(index);
    };
    deleteCell.appendChild(deleteButton);
    
    // Append all cells to the row
    row.appendChild(indexCell);
    row.appendChild(nameCell);
    row.appendChild(visitCell);
    row.appendChild(deleteCell);
    
    // Append row to table body
    tableBody.appendChild(row);
  });
}

function visitBookmark(url) {
  if (url) {
    window.open(url, "_blank");
  }
}

function deleteBookmark(index) {
  if (confirm("Are you sure you want to delete this bookmark?")) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmarks();
  }
}

function clearInputs() {
  sitName.value = "";
  sitUrl.value = "";
  sitUrl.classList.remove('url-valid', 'url-invalid');
  sitName.classList.remove('url-valid', 'url-invalid');   
  infoBox.classList.add("d-none");
}

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  addBookmark();
});

// Initial display of bookmarks 
displayBookmarks();

// Add event listener to the close button
closeBtn.addEventListener("click", function() {
  infoBox.classList.add("d-none");
});

sitUrl.addEventListener('input', function() {
  const url = sitUrl.value.trim();
  if (url === '') {
    sitUrl.classList.remove('url-valid', 'url-invalid');
  } else if (isValidUrl(url)) {
    sitUrl.classList.add('url-valid');
    sitUrl.classList.remove('url-invalid');
  } else {
    sitUrl.classList.add('url-invalid');
    sitUrl.classList.remove('url-valid');
  }
});

sitName.addEventListener('input', function() {
  const name = sitName.value.trim();
  if (name === ''|| name.length < 3) {
    sitName.classList.add('url-invalid');
    sitName.classList.remove('url-valid');
  } else {
    sitName.classList.add('url-valid');
    sitName.classList.remove('url-invalid');
  }
});
function isValidUrl(url) {
  try {
    // Basic pattern check
    const urlRegex = /^(https?:\/\/)?([\w.-]+\.[a-zA-Z]{2,})(\/[\w.-]*)*\/?(\?[^#\s]*)?(#[^\s]*)?$/;
    if (!urlRegex.test(url)) return false;
    
    // More thorough validation using URL constructor
    new URL(url.includes('://') ? url : `http://${url}`);
    return true;
  } catch (e) {
    return false;
  }
}