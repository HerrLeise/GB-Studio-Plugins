# Unofficial guide to GB Studio plugins

Copy of: https://gist.github.com/pau-tomas/25ef9ab2508b80b22bde4091b1df0503

## What are plugins?

Plugins is a feature introduced in GB Studio 1.2 that allows to extend its functionality by using Javascript.

Although it has been mentioned [in an official manner](https://twitter.com/GBStudioDev/status/1206257954317570049) it's currently undocumented.

There's currently three types of Plugins: 

## Events

Javascript files that allow to create new Events that can be used in GB Studio scripts using JS files.

## Menus

Allow to add new menu items to the GB Studio editor to execute custom actions.

## Backgrounds and Sprites

The simplest of the bunch. Allow to create sets of images that can be used in a project. 

In this tutorial we'll focus on the `events` ones.

## Before we start

While creating a plugin isn't complex, it requires some experience on writing and reading Javascript. Being an undocumented functionlity some of the available features need to be read from the exisiting GB Studio codebase available in Github, the specific files are linked below. 

:warning: :warning: :warning: :warning: 
**Make sure to make a copy of your project before creating any plugins. Plugins haven't been officially released so there's a risk they'll stop working in the future and potentially make your project unusable. Proceed at your own risk. You've been warned.**
:warning: :warning: :warning: :warning:

## Adding a new Event Plugin

We'll create an Event Plugin that sets two given variables to a given value. We'll call it: `Set Two Variables`. Yes, it's silly :)

- Create a new folder in your project called `plugins`. Inside of it create another folder: `setTwoVariablesPlugin`. And inside that one create another one called `events`.

- Add a new `js` file into the `events`. The file name has to start with the word `event`, so we'll call it `eventSetTwoVariables.js`.

- Open the file with your text editor.

- An Event consist of three constants:

  - `id` is the unique identifier of the Event and has the format of a uppercase string. You can use any string here, but since it has to be unique it's not a bad practice to have it start with your initials, for example `JD_` (for John Doe).

    For our example:

    ```js
      export const id = "JD_SET_TWO_VARIABLES";
    ```

  - `name` is the name of the event as it'd appear in the GB Studio editor. As of now, this string can't be localized.

    For our example:

    ```js
      export const name = "Set Two Variables";
    ```

  - `fields` is an array of input fields for the Event. Those are rendered in the GB Studio UI when the Event is added and allow the user to input values to configure the Event.

    For our example, we need two fields of type `variable` to define the variables the Event will update. And a `number` field to define the value to set the variables to.

    ```js
    export const fields = [
      {
        key: "vectorX",
        type: "variable",
      },
      {
        key: "vectorY",
        type: "variable",
      },
      {
        key: "value",
        type: "number",
        min: 0,
        max: 255,
        defaultValue: 128
      }
    ];
    ```

    There's many other types of fields (like `actor` or `scene`) and parameters that can be used to customize fields (like `label` or `width`). The best way to learn about those is too look at existing Events in [`src/lib/events/`](https://github.com/chrismaltby/gb-studio/tree/v2beta/src/lib/events) and look for the fields they use.

  - `compile` is a function that is called when the game is built by using the `Run` or `Export` command. The function calls Script Builder functions that build the list of Commands used by the game. Don't think about the compile function as if you're going to execute javascript code in the game at runtime. What you're doing is using javascript to generate a script that will be run at runtime by calling the functions from helpers object, anything that it's not a call to those functions won't have any effect on the game at runtime.
  
    Script Builder functions are a set of Javascript functions that serve as bridge between the UI Events and the game code. Without getting into much details each of this functions adds values to an output array that is later used to build the script that defines the game logic.

    All the functions are declared as methods of the ScriptBuilder class in [src/lib/compiler/scriptBuilder.js](https://github.com/chrismaltby/gb-studio/blob/v2beta/src/lib/compiler/scriptBuilder.js). 

    The `compile` function receives two argumens: `input`, an object that contains the values of all the fields defined above; and `helpers`, that contains all the Script Builder functions (and some other stuff not required yet).

    For our example, we want to use the Script Builder function `variableSetToValue`. We'll use it twice to set both the variables `vectorX` and `vectorY` to the value of `value`.

    ```js
    export const compile = (input, helpers) => {
      const { variableSetToValue } = helpers;
      const { vectorX, vectorY, value} = input;
      variableSetToValue(vectorX, value);
      variableSetToValue(vectorY, value);
    };
    ```

Save the file and Reload GB Studio. Now the `Set Two Variables` Event should appear in the `Add Event` search box list and you should be able to add it to any script. 

And that's all. Now the Event can be added to any script on the project.
