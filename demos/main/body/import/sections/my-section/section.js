const mySectionContentLog = (content) => {
	const output = document.body.querySelector(".my-output");
	output.innerHTML = `<pre>${content}</pre>`;
}