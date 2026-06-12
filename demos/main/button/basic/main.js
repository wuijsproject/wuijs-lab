const init = () => {
	const output = document.body.querySelector(".output");
	const button1 = new WUIButton({
		selector: ".wui-button.button1",
		//iconClass: null,
		//iconImage: null,
		//text: "button 1",
		//textClass: null,
		//textData: null,
		//submit: false,
		//warning: false,
		//flat: false,
		//selectable: false,
		//locked: false,
		//enabled: true,
		onClick: (selected) => {
			output.textContent = "Click button 1";
		},
		onDblClick: (selected) => {
			output.textContent = "Double-Click button 1";
		}
	});
	const button2 = new WUIButton({
		selector: ".wui-button.button2",
		//iconClass: "wui-icon float-left mappointer-fill",
		//text: "button 2",
		//submit: true,
		onClick: (selected) => {
			output.textContent = "Click button 2";
		},
		onDblClick: (selected) => {
			output.textContent = "Double-Click button 2";
		}
	});
	button1.init();
	button2.init();
}

window.addEventListener("DOMContentLoaded", init);