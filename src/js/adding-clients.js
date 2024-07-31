let baseClientBox; // kafelek z nazwą klienta
let baseClientDataBox; //szczegółowe dane klienta
let baseClientName; // nazwa klienta w bazie
let baseClientDataCloseBtn; //przycisk zamknięcia okienka z informacjami o kliencie z bazy

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	// add client area
	addClientBtn = document.querySelector(".add-client-btn");
	addClientArea = document.querySelector(".area-shadow");
	addClientCancelBtn = document.querySelector(".btn-cancel-client");
	addClientConfirmBtn = document.querySelector(".btn-confirm-add-client");
	// add client area end

	newClientName = document.querySelector("#add-client-name");
	newClientNip = document.querySelector("#add-client-nip");
	newClientCity = document.querySelector("#add-client-city");
	newClientZipCode = document.querySelector("#add-client-zip-code");
	newClientStreet = document.querySelector("#add-client-street");
	newClientPhone = document.querySelector("#add-client-phone");
	newClientEmail = document.querySelector("#add-client-email");
	newClientDescription = document.querySelector("#add-client-description");

	viewOfAddedClients = document.querySelector(".added-clients");
};

const prepareDOMEvents = () => {
	addClientConfirmBtn.addEventListener("click", createNewClient);

	addClientBtn.addEventListener("click", () => {
		addClientArea.show();
	});
	addClientCancelBtn.addEventListener("click", () => {
		addClientArea.close();
	});
};

const createNewClient = () => {
	baseClientBox = document.createElement("div");
	baseClientBox.classList.add("added-clients__client-box");
	viewOfAddedClients.appendChild(baseClientBox);

	baseClientName = document.createElement("button");
	baseClientName.classList.add("added-clients__name");
	baseClientName.textContent = newClientName.value;
	baseClientBox.appendChild(baseClientName);

	addedClientDataArea = document.createElement("dialog");
	addedClientDataArea.classList.add("added-clients-area-shadow");
	baseClientBox.appendChild(addedClientDataArea);

	baseClientDataBox = document.createElement("div");
	baseClientDataBox.classList.add("added-clients__data");
	addedClientDataArea.appendChild(baseClientDataBox);

	baseClientDataBox.innerHTML = `
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

	baseClientDataCloseBtn = document.createElement("button");
	baseClientDataCloseBtn.classList.add("added-clients__close-btn");
	baseClientDataCloseBtn.textContent = "Zamknij";
	baseClientDataBox.appendChild(baseClientDataCloseBtn);

	addClientArea.close();
	clearInputs();
	showClientData();
	closeClientData();
};

const showClientData = () => {
	baseClientName.addEventListener("click", () => {
		console.log(baseClientName.nextElementSibling);
		addedClientDataArea.show();
	});
};

const closeClientData = () => {
	baseClientDataCloseBtn.addEventListener("click", () => {
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
