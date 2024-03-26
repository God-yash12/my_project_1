function openNav() {
  document.getElementById("sideNavBar").style.width = "220px";
  document.getElementById("main").style.marginLeft = "220px";
}

function closeNav() {
  document.getElementById("sideNavBar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  redirection();
}
window.addEventListener("DOMContentLoaded", function () {
  closeNav();
});

function openCompanyForm() {
  closeAllForms();
  document.getElementById("companyForm").style.display = "block";
}

function closeCompanyForm() {
  document.getElementById("companyForm").style.display = "none";
}

function closeAllForms() {
  document.getElementById("companyForm").style.display = "none";
  document.getElementById("userLists").style.display = "none";
 
}

function openUserLists() {
  closeAllForms();
  document.getElementById("userLists").style.display = "block";
}
function closeUserTable() {
  document.getElementById("userLists").style.display = "none";
  redirection();
}

function openCompanyLists() {
  closeAllForms();
  document.getElementById("companiesLists").style.display = "block";
}
function closeCompanyTable() {
  document.getElementById("companiesLists").style.display = "none";
  redirection();
}

function redirection() {
  window.location.href = "/superAdmin";
}
