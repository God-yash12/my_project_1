let state = false;
function togglEye() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        state = false;
    } else {
        document.getElementById("password").setAttribute("type", "text");
        state = true;
    }
}

let closeBtn = document.getElementById("close");
let wrapperForm = document.getElementById("wrapper");
closeBtn.addEventListener("click", function(){
    wrapperForm.style.display = "none";
});


const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener("click", () => {
    wrapper.classList.remove('active');
});
