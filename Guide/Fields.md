# Fields
Fields are used for definition of content to collect, manipulate, and in the end compile.

## key
Unique identifier Key to be used in your event. The `key` value should never be overlapping or overloading existing `key` identifiers.
In order to comply with the Event-Register please stick to a Name-Scheme.
You can define your key-identifiers, using an organisational identifier.

**Example:**
```js
  key: "<orgIdentifier>_<fieldObject>_<fieldPurpose>_<purposeMultiplier>"
```
Which could result in:
```js
  key: "HL_ActorDialog_ArraySprite_R1-1"
```
In the example above you will see the organisation Identifier `HL` for `Herr Leise` in `<orgIdentifier>`; 
`ActorDialog` and the generic type (or thing) you want to describe as `<fieldObject>`;
`ArraySprite` as the generic purpose, like in `<fieldPurpose>` - this will help you keep track of the purpose, when dealing with many keys in your event.;
`R1-1` as the definite purpose direction for `<purposeMultiplier>`, in that case for `Row One, Cell One`.
 

## label
`label` defines the Descriptive Text next to the Field options. Define the `label` as a short description of your intent.


## toggleLabel
The `toggleLabel` is used to distinguish the empty and set state of a variable.
Use `toggleLabel`to give editors a descriptive text, of what will happen with the field, when filled.


## type
Please see https://github.com/HerrLeise/GB-Studio-Plugins/blob/8869d15143b07d9d9b347793a63a8a1b34d9711a/Guide/Types.md for more information.

## filter
With `filter` you can define what resources, or defined elements shall be selectable, depending on the current `type`.

**Example:**
```js
filter: sprite => sprite.numFrames === 1
```

## updateFn
The update Function triggered when editing values in the Editor. Should have a `return` type or recursive function to be called.

**Example:**
```js
updateFn: (string, field, args) => {
      const maxPerLine = args.avatarId ? 16 : 18;
      const maxTotal = args.avatarId ? 48 : 52;
      return trimlines(string, maxPerLine, 4, maxTotal);
    }
```

## postUpdate


**Example:**
```js
postUpdate: (args) => {
      const maxPerLine = args.avatarId ? 16 : 18;
      const maxTotal = args.avatarId ? 48 : 52;
      return {
        ...args,
        text: Array.isArray(args.text)
          ? args.text.map(string => trimlines(string, maxPerLine, 4, maxTotal))
          : trimlines(args.text, maxPerLine, 4, maxTotal)
      };
    }
```

## defaultType
The `defaultType` will be used, when you have to deal with type `union` in your field definition, treated as Variant in the Editor.

## defaultValue
The defaultValue describes the variable content pre-defined. `defaultValue` can be anything compatible with the field dataType.

**Examples:**

ObjectValue
```js
defaultValue: {
      direction: "up",
      variable: "LAST_VARIABLE",
      property: "$self$:direction"
    }
```   


ReferenceValue
```js
defaultValue: "$self$"
```


DefinedValue
```js
defaultValue: "STRING|VAL|NUM"
```

## placeholder

## optional
Boolean `true` or `false`.
Marks if a field can be modified optional, and will not be required.

## min

## max

## multiple
With `multiple` you can define if a `textarea` will support multiple instances within the field.

## width
With `width` attribute you can define the size of the UI Field element in the Editor

Example:
`width: "50%"`

Width 100%

![100p Width](https://github.com/HerrLeise/GB-Studio-Plugins/blob/7a2a1fb46f81589054a06829ed73934bf6937ac7/Guide/res/ui_width-100p.png)

Width 50%

![50p Width](https://github.com/HerrLeise/GB-Studio-Plugins/blob/7a2a1fb46f81589054a06829ed73934bf6937ac7/Guide/res/ui_width-50p.png)
