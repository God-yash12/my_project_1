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



// JavaScript
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to faster
        const inc = target / speed;

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
