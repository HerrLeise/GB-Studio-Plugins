# Plugin Types
Documented Types:
`text`,`number`,`variable`,`checkbox`,`select`
`sprite`,`actor`,`variable`,`checkbox`,`select`

## Generic Types
`text`,`number`,`variable`,`checkbox`,`select`

### Text


### Number


### Variable


### Checkbox


### Select
With the `select` type you can define a list of options to choose from, in the event definition UI.

```
  .
  .
  .
  	type: "select",
	options: [
		["right", "Right"],
		["left", "Left"]
	],
	defaultValue: "right",
    .
    .
    .
```
