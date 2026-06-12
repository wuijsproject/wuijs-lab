const init = () => {
	const output = document.body.querySelector(".output");
	const timepicker = new WUITimepicker({
		selector: ".wui-timepicker.my-timepicker",
		//lang: "en",
		value: "10:30",
		//min: "00:00",
		//max: "23:59",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "left",
		//hidden: false,
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
	timepicker.init();
}

window.addEventListener("DOMContentLoaded", init);
