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

## type
Please see https://github.com/HerrLeise/GB-Studio-Plugins/blob/8869d15143b07d9d9b347793a63a8a1b34d9711a/Guide/Types.md for more information.

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

## min

## max

## width
With `width` attribute you can define the size of the UI Field element in the Editor

Example:
`width: "50%"`

