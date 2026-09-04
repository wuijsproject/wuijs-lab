# WUIBody - Import demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIBody's import functionality.

## WUI/JS Stack

- WUIBody - 0.8

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-body): `WUIBody` component documentation.

## Source

| Type | File |
|:----:| ---- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |
| CSS  | [sections/my-section/section.css](./sections/my-section/section.css) |
| HTML | [sections/my-section/section.htm](./sections/my-section/section.htm) |
| JS   | [sections/my-section/section.js](./sections/my-section/section.js) |

## Implementation

CSS content of the `./sections/my-section/section.css` file:

```css
.my-section {
	margin: 10px;
}

.my-section a,
.my-section a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

HTML content of the `./sections/my-section/section.htm` file:

```html
<section id="mySection" class="my-section">
	<a href="https://wuijs.dev" target="_blank">go to WUI/JS Project website!</a>
</section>
```

JS content of the `./sections/my-section/section.js` file:

```js
const mySectionContentLog = (content) => {
	const output = document.body.querySelector(".output");
	output.innerHTML = `<pre>${content}</pre>`;
}
```

CSS Code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.8.js"></script>
```

HTML code:

```html
<section id="mySection"></section>
<div class="output"><pre>loading content...</pre></div>
```

JS code:

```js
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
```
