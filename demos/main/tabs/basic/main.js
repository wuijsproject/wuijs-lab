const init = () => {
	const tabs = new WUITabs({
		selector: ".wui-tabs.my-tabs",
		//layout: "top",
		//index: 0
	});
	tabs.init();
}

window.addEventListener("DOMContentLoaded", init);