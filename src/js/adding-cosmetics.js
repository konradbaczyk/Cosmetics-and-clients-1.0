const newProductName = document.querySelector(".add-cosmetic-name");
const newProductNetPrice = document.querySelector(".add-cosmetic-net-price");
const newProductVatPercentage = document.querySelector(".add-cosmetic-vat-percentage");
const newProductAmount = document.querySelector(".add-cosmetic-amount");
const newProductAddBtn = document.querySelector(".add-new-cosmetic-btn");
const addedProductsTable = document.querySelector(".cosmetic-warehouse");
const addedProductsLine = document.querySelector(".cosmetic-warehouse__info");
const newProductError = document.querySelector(".error");

const vatProduct8 = "8%";
const vatProduct23 = "23%";

const addNewCosmetic = () => {
	createNewLineProduct();
	createNewProductName();
	createNewProductNetPrice();
	createNewProductGrossPrice();
	createNewProductVat();
	createNewProductAmount();
	clearInputs();
};

const createNewLineProduct = () => {
	addedProductLine = document.createElement("div");
	addedProductLine.classList.add("cosmetic-warehouse__info");
	addedProductsTable.appendChild(addedProductLine);
};

const createNewProductName = () => {
	addedProductName = document.createElement("p");
	addedProductName.classList.add("cosmetic-warehouse__info--name");
	addedProductName.textContent = newProductName.value;
	addedProductLine.appendChild(addedProductName);
};

const createNewProductNetPrice = () => {
	addedProductNetPrice = document.createElement("p");
	addedProductNetPrice.classList.add("cosmetic-warehouse__info--net-price");
	addedProductNetPrice.textContent = newProductNetPrice.value;
	addedProductLine.appendChild(addedProductNetPrice);
};

const createNewProductGrossPrice = () => {
	addedProductGrossPrice = document.createElement("p");
	addedProductGrossPrice.classList.add("cosmetic-warehouse__info--gross-price");
	if (newProductVatPercentage.selectedIndex === 1) {
		addedProductGrossPrice.textContent = (newProductNetPrice.value * 1.08).toFixed(2);
	} else if (newProductVatPercentage.selectedIndex === 2) {
		addedProductGrossPrice.textContent = (newProductNetPrice.value * 1.23).toFixed(2);
	}
	addedProductLine.appendChild(addedProductGrossPrice);
};

const createNewProductVat = () => {
	addedProductVatPercentage = document.createElement("p");
	addedProductVatPercentage.classList.add("cosmetic-warehouse__info--vat-value");
	if (newProductVatPercentage.selectedIndex === 1) {
		addedProductVatPercentage.textContent = vatProduct8;
	} else if (newProductVatPercentage.selectedIndex === 2) {
		addedProductVatPercentage.textContent = vatProduct23;
	}
	addedProductLine.appendChild(addedProductVatPercentage);
};

const createNewProductAmount = () => {
	addedProductAmount = document.createElement("p");
	addedProductAmount.classList.add("cosmetic-warehouse__info--amount");
	addedProductAmount.textContent = newProductAmount.value;
	addedProductLine.appendChild(addedProductAmount);
};

const checkInputs = () => {
	if (
		(newProductName.value !== "") &
		(newProductName.value !== "") &
		(newProductNetPrice.value !== "") &
		(newProductVatPercentage.selectedIndex !== 0) &
		(newProductAmount.value !== "")
	) {
		addNewCosmetic();
	} else {
		newProductError.classList.remove("visibility-hidden");
		setTimeout(() => {
			newProductError.classList.add("visibility-hidden");
		}, 4000);
	}
};

const clearInputs = () => {
	newProductName.value = "";
	newProductNetPrice.value = "";
	newProductVatPercentage.value = 0;
	newProductAmount.value = "";
};

newProductAddBtn.addEventListener("click", checkInputs);
