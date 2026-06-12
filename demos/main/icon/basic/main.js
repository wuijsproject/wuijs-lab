const init = () => {
	const conteiner = document.querySelector("nav");
	const button = document.querySelector("button");
	const names = WUIIcon.getNames();
	button.addEventListener("click", () => {
		conteiner.innerHTML = "";
		names.forEach(name => {
			const icon = document.createElement("div");
			icon.className = `icon wui-icon ${name}`;
			icon.title = name;
			conteiner.append(icon);
		});
	});
}

window.addEventListener("DOMContentLoaded", init);