function openAddJobForm() {
  closeForm()
  var addJobForm = document.getElementById("addJobForm");
  addJobForm.style.display = "block";
}

function closeAddJobForm() {
  var addJobForm = document.getElementById("addJobForm");
  addJobForm.style.display = "none";
}

function toggleProfile() {
  closeAddJobForm()
  let companyProfile = document.getElementById("companyCard");
  companyProfile.style.display = "block";
}
function closeProfile(){
  let closeCard = document.getElementById("companyCard");
  closeCard.style.display = "none";
}


function closeForm(){
  document.getElementById("companyCard").style.display = "none";
}

function closeFormJobAdd(){
  document.getElementById("addJobForm").style.display = "none";
}