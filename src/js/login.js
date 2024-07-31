const infoBox = document.querySelector(".info-box");
const infoBoxOpenBtn = document.querySelector(".info-box-btn");
const infoBoxCloseBtn = document.querySelector(".info-box__close-btn");

const loginInput = document.querySelector(".login");
const passwordInput = document.querySelector(".password");
const loginBtn = document.querySelector(".login-btn");
const loginError = document.querySelector(".login-error");
const passwordError = document.querySelector(".password-error");

infoBoxOpenBtn.addEventListener("click", () => {
	infoBox.show();
});

infoBoxCloseBtn.addEventListener("click", () => {
	infoBox.close();
});

loginError.classList.remove("visibility-hidden");

const checkLoginData = () => {
	if ((loginInput.value == "kalendarz") & (passwordInput.value == "praca")) {
		loginBtn.setAttribute("href", "/app-page.html");
	} else if ((loginInput.value != "kalendarz") & (passwordInput.value != "praca")) {
		loginError.classList.remove("display-none");
		passwordError.classList.remove("display-none");
		setTimeout(() => {
			loginError.classList.add("display-none");
			passwordError.classList.add("display-none");
		}, 4000);
	} else if (loginInput.value != "kalendarz") {
		loginError.classList.remove("display-none");
		setTimeout(() => {
			loginError.classList.add("display-none");
		}, 4000);
	} else if (passwordError.value != "praca") {
		passwordError.classList.remove("display-none");
		setTimeout(() => {
			passwordError.classList.add("display-none");
		}, 4000);
	}
};

loginBtn.addEventListener("click", checkLoginData);
