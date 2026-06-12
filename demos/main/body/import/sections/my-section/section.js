const mySectionContentLog = (content) => {
	const output = document.body.querySelector(".output");
	output.innerHTML = `<pre>${content}</pre>`;
}