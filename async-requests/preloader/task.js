const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
	
function currencyItem(code, value) {
		let newItem = document.createElement("div");
		newItem.classList.add("item");

		let valuteCode = document.createElement("div");
		valuteCode.classList.add("item__code");
		newItem.appendChild(valuteCode);
		valuteCode.append(code);

		let valuteValue = document.createElement("div");
		valuteValue.classList.add("item__value");
		newItem.appendChild(valuteValue);
		valuteValue.append(value);

		let valuteCurrency = document.createElement("div");
		valuteCurrency.classList.add("item__currency");
		newItem.appendChild(valuteCurrency);
		items.appendChild(newItem);
		valuteCurrency.textContent = "руб.";
		
	}

xhr.onreadystatechange = function() {
	if (xhr.readyState === xhr.DONE) { 
		loader.classList.remove('loader_active');
		const json = JSON.parse(xhr.response);
		const valutes = json.response["Valute"];
		for (let c in valutes) {
			currencyItem(valutes[c].CharCode, valutes[c].Value);
		};
	};
};

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
	