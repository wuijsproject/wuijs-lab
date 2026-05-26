const init = () => {
	const body = new WUIBody({
		//environment: "web",
		importDirectory: "./sections/",
		//importMode: "fetch",
		onCompleted: () => {
			body.prepare();
		},
		debug: true
	});
	body.import("mySection", "my-section/section", () => {
		mySectionContentLog("test content loaded");
	});
}

window.addEventListener("DOMContentLoaded", init);