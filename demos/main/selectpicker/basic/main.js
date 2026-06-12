const init = () => {
	const output = document.body.querySelector(".output");
	const selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		//lang: "en",
		//options: [],
		value: "2",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "center",
		//required: true,
		//hidden: false,
		//autochange: true,
		//multiple: false,
		//separatorValue: ",",
		//separatorText: ", ",
		//filterable: true,
		//viewicon: false,
		//viewtext: true,
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		},
		onClose: (value) => {
			output.textContent = `Closed - value: ${value}`;
		}
	});
	selectpicker.init();
}

window.addEventListener("DOMContentLoaded", init);