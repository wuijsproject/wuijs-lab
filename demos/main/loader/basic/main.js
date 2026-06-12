const wuiComponents = {};

const init = () => {
	["ring", "dualring", "spinner", "roller", "ellipsis", "grid"].forEach(style => {
		wuiComponents[style+"Loader"] = new WUILoader({
			selector: `.wui-loader.my-loader-${style}`,
			style,
			//size: 60
		});
		wuiComponents[style+"Loader"].init();
	});
}

window.addEventListener("DOMContentLoaded", init);