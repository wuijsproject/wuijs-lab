# WUIBody - Demo de importación

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Este demo muestra el uso de la funcionalidad de importación de WUIBody.

## Stack WUI/JS

- WUIBody - 0.5

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación global.
- [WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-body): Documentación del componente `WUIBody`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |
| CSS  | [sections/my-section/section.css](./sections/my-section/section.css) |
| HTML | [sections/my-section/section.htm](./sections/my-section/section.htm) |
| JS   | [sections/my-section/section.js](./sections/my-section/section.js) |

## Implementación

Contenido CSS del archivo `./sections/my-section/section.css`:

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

Contenido HTML del archivo `./sections/my-section/section.htm`:

```html
<section id="mySection" class="my-section">
	<a href="https://www.google.com">Google!</a><a href="https://wuijs.dev" target="_blank">go to WUI/JS Project website!</a>
</section>
```

Contenido JS del archivo `./sections/my-section/section.js`:

```js
const mySectionContentLog = (content) => {
	const output = document.body.querySelector(".output");
	output.innerHTML = `<pre>${content}</pre>`;
}
```

Código CSS:

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

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.5.js"></script>
```

Código HTML:

```html
<section id="mySection"></section>
<div class="output"><pre>cargando contenido...</pre></div>
```

Código JS:

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
		mySectionContentLog("contenido de prueba cargado");
	});
}

window.addEventListener("DOMContentLoaded", init);
```
