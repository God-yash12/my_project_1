function openUpdateForm() {
  closeAllForm();
  const updateForm = document.getElementById("updateForm");
  updateForm.style.display = "block";
}

function closeUpdateForm() {
  const closeUpdateForm = document.getElementById("updateForm");
  closeUpdateForm.style.display = "none";
}

function closeAllForm() {
  const closeAllForm = document.getElementById("updateForm");
  closeAllForm.style.display = "none";
}


// userProfile.js (assuming this is your client-side JavaScript file)
function openUpdateForm() {
  window.location.href = `/userProfile/updateForm/{{user.id}}`;
}
