# Plugin Types
Plugins can have various field types for definition. Below you will find a list of types documented and tested with GB-Studio 2.0.5

Documented Types:
`text`,`textarea`,`number`,`variable`,`checkbox`,`select`
`sprite`,`actor`,`collapsable`,`xxx`,`xxx`

## Generic Types
`text`,`number`,`variable`,`checkbox`,`select`,`collapsable`

### Text


### Number


### Variable


### Checkbox


### Select
With the `select` type you can define a list of options to choose from, in the event definition UI.

```js
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
`scene`,`actor`,`sprite`,`xxx`,`xxx`,`xxx`,`xxx`

### Scene
Scene describes a registred value (like `LAST_SCENE`), or a variable holding a reference to a selected scene.

### Sprite
The Sprite type can only be used once in a custom plugin event. And the key should always be: `spriteSheetId`, due to the fact that sprite precompilation is done by field key name, rather than field types.

**Example: ** _For getting a specific sprite with exact 9 frames from the reosurce browser in UI_
```js
	{
		key: "spriteSheetId",
		type: "sprite",
		label: "Dialog Sprite (9 Frames)",
		filter: sprite => sprite.numFrames === 9,
		optional: false,
	}
```
