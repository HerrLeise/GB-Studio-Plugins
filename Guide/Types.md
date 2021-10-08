# Plugin Types
Plugins can have various field types for definition. Below you will find a list of types documented and tested with GB-Studio 2.0.5

Documented Types:
`text`,`textarea`,`number`,`variable`,`checkbox`,`select`
`sprite`,`actor`,`collapsable`,`checkbox`,`select`

## Generic Types
`text`,`number`,`variable`,`checkbox`,`select`,`collapsable`

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

## Specific Types
`union`,`direction`,`xxx`,`xxx`,`xxx`,`xxx`

## Scene & Actor Types
`actor`,`sprite`,`xxx`,`xxx`,`xxx`,`xxx`

