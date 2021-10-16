# HL Enhanced Visual Dialogues

With Enhanced Visual Dialogues you can use a 9-Frame Sprite to fill 9 actors in a 3x3 array to show a person or thing that communicates.

**Features:**
- Single Event for Dialogues with Character on Screen, to display emotions and others
- reduced the amount of single events from at least 27 to 1 for each character with on screen dialogue
- Don't worry about too long text dialogues

![HLEVD Scenes](https://github.com/HerrLeise/GB-Studio-Plugins/blob/d78f96b76ab2ad44477fd3cce3474a2d5315f754/Guide/res/HLEVD_Scenes.png)

![HLEVD Dialog Text Block AUtomation](https://github.com/HerrLeise/GB-Studio-Plugins/blob/1d4030b45f19b54e8f9fed3461194f7f7e28348c/Guide/res/HLEVD_Scenes_TextEditor.png)


**Requirements**

You need a Character you can slice into 9 16x16 frames.
In this example we use a 48x48 girl sprite:
![HLEVD Scenes](https://github.com/HerrLeise/GB-Studio-Plugins/blob/556e647c898fcb81a85b3bf72d185a0bbf98be42/Guide/res/48x48_MasterSprite.png)

And slice it into 9 frames, where 3 frames represent a row of to be assigned actor sprite frames:
![HLEVD Scenes](https://github.com/HerrLeise/GB-Studio-Plugins/blob/556e647c898fcb81a85b3bf72d185a0bbf98be42/Guide/res/9x16_SliceSprite.png)




**Example**

![HLEVD In Action](https://github.com/HerrLeise/GB-Studio-Plugins/blob/b58bb4af8e1c71fbab9c99c81c036d9ab0128121/Guide/res/HLEVD_A.png)
![HLEVD In Action](https://github.com/HerrLeise/GB-Studio-Plugins/blob/b58bb4af8e1c71fbab9c99c81c036d9ab0128121/Guide/res/HLEVD_B.png)




![HL_Event_Editor](https://github.com/HerrLeise/GB-Studio-Plugins/blob/b58bb4af8e1c71fbab9c99c81c036d9ab0128121/Guide/res/HL_Event_Screenshot.png)



**Build, run, tested on GB-Studio 2.0b5**

**Limitations**
You cannot display 2 Dialogue Actors on a Screen, due to Frame and Actor restrictions in GB-Studio 2.0b5


// --------------------------------------------------------------- //
// ------------------------- CHANGELOG --------------------------- //
// --------------------------------------------------------------- //
/*


[0.2] Dont worry about Text Blocks
- Automatically checks your textblocks for overlength & then turns
those into additional dynamic on compile added text blocks.
You can now focus on what really matters: 
		   writing your games story lines

[0.1] Inital Release

*/
// --------------------------------------------------------------- //
