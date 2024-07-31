let addedClientBox;
let addedClientNip;
let addedClientCity;
let addedClientZipCode;
let addedClientStreet;
let addedClientPhone;
let addedClientEmail;
let addedClientDescription;

let addedNewClientDataBox;

let addedClientName;
let clientDataCloseBtn;
let dataToShow;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	cancelAddClientBtn = document.querySelector(".btn-cancel-client");
	confirmAddClientBtn = document.querySelector(".btn-confirm-add-client");

	addClientBtn = document.querySelector(".add-client-btn");
	addClientArea = document.querySelector(".area-shadow");

	newClientName = document.querySelector("#add-client-name");
	newClientNip = document.querySelector("#add-client-nip");
	newClientCity = document.querySelector("#add-client-city");
	newClientZipCode = document.querySelector("#add-client-zip-code");
	newClientStreet = document.querySelector("#add-client-street");
	newClientPhone = document.querySelector("#add-client-phone");
	newClientEmail = document.querySelector("#add-client-email");
	newClientDescription = document.querySelector("#add-client-description");

	// addedClientDataBox = document.querySelector(".added-clients-area-shadow");
	// addedClient = document.querySelector(".added-clients__name");
	// closeClientDataBox = document.querySelector(".added-clients__close-btn");

	viewOfAddedClients = document.querySelector(".added-clients");
};

const prepareDOMEvents = () => {
	confirmAddClientBtn.addEventListener("click", createNewClient);

	addClientBtn.addEventListener("click", () => {
		addClientArea.show();
	});
	cancelAddClientBtn.addEventListener("click", () => {
		addClientArea.close();
	});
};

const createNewClient = () => {
	addedClientBox = document.createElement("div");
	addedClientBox.classList.add("added-clients__client-box");
	viewOfAddedClients.appendChild(addedClientBox);

	addedClientName = document.createElement("button");
	addedClientName.classList.add("added-clients__name");
	addedClientName.textContent = newClientName.value;
	addedClientBox.appendChild(addedClientName);

	addedClientDataArea = document.createElement("dialog");
	addedClientDataArea.classList.add("added-clients-area-shadow");
	addedClientBox.appendChild(addedClientDataArea);

	addedNewClientDataBox = document.createElement("div");
	addedNewClientDataBox.classList.add("added-clients__data");
	addedClientDataArea.appendChild(addedNewClientDataBox);

	addedNewClientDataBox.innerHTML = `
		<div class="added-clients__data--box">
			<span class="text-bold">Nazwa:</span>
			<span class="added-clients__data--name">${newClientName.value}</span>
		</div>

		<div class="added-clients__data--box">
			<span class="text-bold">NIP:</span>
			<span class="added-clients__data--nip">${newClientNip.value}</span>
		</div>

		<div class="added-clients__data--box">
			<span class="text-bold">Miasto:</span>
			<span class="added-clients__data--city">${newClientCity.value}</span>
		</div>

		<div class="added-clients__data--box">
			<span class="text-bold">Kod pocztowy:</span>
			<span class="added-clients__data--zip-code">${newClientZipCode.value}</span>
		</div>

		<div class="added-clients__data--box">
			<span class="text-bold">Ulica:</span>
			<span class="added-clients__data--street">${newClientStreet.value}</span>
		</div>

		<div class="added-clients__data--box">
			<span class="text-bold">Numer telefonu:</span>
			<span class="added-clients__data--phone">${newClientPhone.value}</span>
		</div>

		<div class="added-clients__data--box">
			<span class="text-bold">E-mail:</span>
			<span class="added-clients__data--email">${newClientEmail.value}</span>
		</div>

		<div class="added-clients__data--box">					
			<span class="text-bold">Opis:</span>
			<span class="added-clients__data--description">${newClientDescription.value}</span>
		</div>`;

	clientDataCloseBtn = document.createElement("button");
	clientDataCloseBtn.classList.add("added-clients__close-btn");
	clientDataCloseBtn.textContent = "Zamknij";
	addedNewClientDataBox.appendChild(clientDataCloseBtn);

	addClientArea.close();
	clearInputs();
	showClientData();
	closeClientData();
};

const showClientData = () => {
	addedClientName.addEventListener("click", () => {
		console.log(addedClientName.nextElementSibling);
		addedClientDataArea.show();
	});
};

const closeClientData = () => {
	clientDataCloseBtn.addEventListener("click", () => {
		addedClientDataArea.close();
	});
};

const clearInputs = () => {
	newClientName.value = "";
	newClientNip.value = "";
	newClientCity.value = "";
	newClientZipCode.value = "";
	newClientStreet.value = "";
	newClientPhone.value = "";
	newClientEmail.value = "";
	newClientDescription.value = "";
};

document.addEventListener("DOMContentLoaded", main);
