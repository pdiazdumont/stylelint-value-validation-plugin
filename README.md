# stylelint css values validation plugin

Plugin to validate that the css property value makes sense.

```css
// this will pass ok
.element-valid {
	background-color: red;
}

// this will throw an error
.element-invalid {
	background-color: fixed;
}
```
