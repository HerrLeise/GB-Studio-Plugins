// --------------------------------------------------------------- //
// Enhanced Dialog Actor Shift for multiple Sprites in 3x3 Array
// Let your characters speak on the screen in portrait
// and don't worry about too long text blocks.
// Bring more detail to your dialogues and let the character
// introduce themselves with unsiversal language.

// v0.2
// Author: Herr Leise
//
// Github:  https://github.com/HerrLeise/GB-Studio-Plugins
// Itch.io: https://herr-leise.itch.io/
// --------------------------------------------------------------- //

export const id = "EVENT_HL_ACTOR_DIALOGUE_ENHANCED";

export const name = "Dialogue: Sprite Actor";


// Shorten a string to less than maxLen characters without truncating words.
function shorten(str, maxLen, separator = ' ') {
	if (str.length <= maxLen) return str;
	return str.substr(0, str.lastIndexOf(separator, maxLen));
}

// make textblocks always the high of 4 rows
function setTextToDefaultHeight(str){
	// in ideation
}

// Split Text into Blocks and take care of formatting
function splitTextIntoBlocks(textToSplit,maxPerLine,maxTotal){
	
	let returnBlocks = new Array(); //return Text Blocks Array
	let scope_text = textToSplit;
	/* Testing (392 Chars, 6 Lines)
	Hello, I'm a dialogue text block, that will exceed the maximum allowed
	length by far. So we are going to split this paragraph into the
	necessary amount of text blocks to display all text.
	In addition we keep word boundaries and will not cut words in halfes.
	Also, we need to ensure, that we don't have leading or trailing
	whitespaces, and unnecessary new lines in between.
	*/
	let temp_txtLength = scope_text.length; // determine the absolute length
	let temp_blocksCountNeeded = Math.ceil(temp_txtLength / maxTotal); // determine how many blocks we will approx need - this number will change, after we perform wordboundary respecting block shorten
	
	for (let j = 0; j < temp_blocksCountNeeded; j++) {
		// extract the first shorten, then determine the shorten length and progressively strip from original block text from left to right
		let shortenText = shorten(scope_text, maxTotal);

		let shortenLength = shortenText.length;
		// after extraction and calculation of absolute width trim extracted text
		shortenText = shortenText.trim();
		
		// push the extract to the return text blocks array
		returnBlocks.push(shortenText);
		
		// NEXT:
		scope_text = scope_text.substring(shortenLength); // get everything after the original extracted text index
		scope_text = scope_text.trim(); //remove the shorten text from the original block and trim potential generated leading or trailing whitespaces with trim()

		
	}
	
	return returnBlocks;
	
	
}

// Generate Text Blocks automatically based on the length of the text (blocks) string lengths
function autoGenerateTextBlocks(dialogueText,maxPerLine,maxTotal){

	
	let newDialogueTextArray = new Array(); //What we will return if we have multiple text blocks
	let newSingleDialogueText; //the single block text we will return if no array present
	
	
	if (Array.isArray(dialogueText)) { 
		//Check if our passed text is already multiple blocks
		//if is array loop through it and test each block if it applies to the rules:
		// text should not be longer than the maxlength, if it is humanly split it
		// and add the next out of this split generated block onto the newDialogueTextArray
		for (let j = 0; j < dialogueText.length; j++) {
			let temp_rowText = dialogueText[j];
			let temp_rowLength = temp_rowText.length;
			
			// first check if the current text block is longer than it should be (maxTotal)
			if (temp_rowText.length >= maxTotal) {
				// if the current block is too long, determine how much too long
				let tempArr = splitTextIntoBlocks(temp_rowText,maxPerLine,maxTotal);
				if (Array.isArray(tempArr)) { 
					for (let i = 0; i < tempArr.length; i++) {
						let t_arr_text = tempArr[i];
						newDialogueTextArray.push( t_arr_text );
					}
				} else {
					newDialogueTextArray.push( tempArr );
				}
				
				
			} else {
				// if the current row is not to long, just place it into the return block
				newDialogueTextArray.push(temp_rowText);
			}
			
		}
		return newDialogueTextArray;
		
		
	} else { // if not test the text block if it is applicable to be split into multiple blocks
		if (dialogueText.length > maxTotal) {
			let tempArr = splitTextIntoBlocks(dialogueText,maxPerLine,maxTotal);
			if (Array.isArray(tempArr)) { 
				for (let i = 0; i < tempArr.length; i++) {
					let t_arr_text = tempArr[i];
					newDialogueTextArray.push( t_arr_text );
				}
			} else {
				newDialogueTextArray.push( tempArr );
			}
			return newDialogueTextArray;
			
		} else {
			return dialogueText; // we have nothing to do, so just return the original text
		}
	}
	
	
}




export var fields = [
	{
		key: "dialogueOrientation",
		label: "Dialogue Actor Orientation",
		type: "select",
		options: [
			["right", "Right (Default)"],
			["left", "Left"]
		],
		defaultValue: "right",
		width: "100%"
	},
	{
		key: "text",
		type: "textarea",
		placeholder: "Text...",
		multiple: true,
		defaultValue: "",
		
	},
	{
		key: "avatarId",
		type: "sprite",
		toggleLabel: "Add Avatar",
		label: "Dialog Avatar",
		defaultValue: "",
		optional: true,
		filter: sprite => sprite.numFrames === 1
		
	},	
	
	{
		key: "spriteSheetId",
		type: "sprite",
		label: "Dialog Sprite (9 Frames)",
		filter: sprite => sprite.numFrames === 9,
		optional: false,
	},
	
	{
		key: "dialogueActor_ONE",
		type: "actor",
		label: "Actor (Row: 1; Pos: 1) - ID 1",
		defaultValue: "",
		optional: false
	},
	
	{
		key: "dialogueActor_TWO",
		type: "actor",
		label: "Actor (Row: 1; Pos: 2) - ID 2",
		defaultValue: "",
		optional: false
	},
	
	{
		key: "dialogueActor_THREE",
		type: "actor",
		label: "Actor (Row: 1; Pos: 3) - ID 3",
		defaultValue: "",
		optional: false
	},
	
	{
		key: "dialogueActor_FOUR",
		type: "actor",
		label: "Actor (Row: 2; Pos: 1) - ID 4",
		defaultValue: "",
		optional: false
	},
	
	{
		key: "dialogueActor_FIVE",
		type: "actor",
		label: "Actor (Row: 2; Pos: 2) - ID 5",
		defaultValue: "",
		optional: false
	},
	
	{
		key: "dialogueActor_SIX",
		type: "actor",
		label: "Actor (Row: 2; Pos: 3) - ID 6",
		defaultValue: "",
		optional: false
	},
	
	{
		key: "dialogueActor_SEVEN",
		type: "actor",
		label: "Actor (Row: 3; Pos: 1) - ID 7",
		defaultValue: "",
		optional: false
	},
	
	{
		key: "dialogueActor_EIGHT",
		type: "actor",
		label: "Actor (Row: 3; Pos: 2) - ID 8",
		defaultValue: "",
		optional: false
	},
	
	{
		key: "dialogueActor_NINE",
		type: "actor",
		label: "Actor (Row: 3; Pos: 3) - ID 9",
		defaultValue: "",
		optional: false
	}
];



const compile = (input, helpers) => {
	
	// some helpers to interact with the compiler
	const {
		entityType,
		entity,
		textDialogue,
		textSetOpenInstant,
		textSetCloseInstant,
		textRestoreOpenSpeed,
		textRestoreCloseSpeed,
		actorSetActive, 
		actorSetSprite, 
		playerSetSprite, 
		getActorById,
		actorSetFrame,
		actorSetFrameToVariable,
		actorMoveTo,
		actorMoveToVariables,
		actorSetPosition,
		actorSetPositionToVariables,
		actorStopUpdate,
		variableFromUnion,
		actorPush,
		temporaryEntityVariable,
		walkScenesEvents,
		warnings
	} = helpers;

	// add context variables, to use in short form instead of: input.varName
	var {
		dialogueOrientation,text,avatarId,
		spriteSheetId,
		dialogueActor_ONE,
		dialogueActor_TWO,
		dialogueActor_THREE,
		dialogueActor_FOUR,
		dialogueActor_FIVE,
		dialogueActor_SIX,
		dialogueActor_SEVEN,
		dialogueActor_EIGHT,
		dialogueActor_NINE
	} = input;	
	
	
	
	// [DEBUG] Remove Comments from below to troubleshoot the current `input` payload
	/*
	warnings(`COMPILING: EVENT_HL_ACTOR_DIALOG_ENHANCED`);
	warnings(`Input Payload:`);
	warnings(`${JSON.stringify(input)}`);
	warnings(` `);
	warnings(`--- --- --- --- --- --- --- --- --- --- ---`);
	*/
	
	// Assign the Actor Sprites to referred Actors on Scene
	// Give your Actors reasonable and easy to identify 
	// names, that will help you assign the rows, and cells
	// My approach:  RA_11 RA_12 RA_13
	//				 RA_21 RA_22 RA_23
	//				 RA_31 RA_31 RA_33
	// "RA" for Row Actor and the numbers, first for row
	// and second number for cell.
	// But you can do it your way of course. ;) 
	//----------------------------------------------------//
	//-------------------- FIRST ROW ---------------------//
	// ACTOR ONE
	if(getActorById(dialogueActor_ONE)) {
		actorSetActive(dialogueActor_ONE); 
		actorSetSprite(spriteSheetId);
		actorSetFrame(0);
		actorSetPosition( 
			dialogueOrientation=="right" ? 13 : 2,
			7,
			true, "horizontal");
	}

	// ACTOR TWO
	if(getActorById(dialogueActor_TWO)) {
		actorSetActive(dialogueActor_TWO); 
		actorSetSprite(spriteSheetId);
		actorSetFrame(1);
		actorSetPosition( 
			dialogueOrientation=="right" ? 15 : 4,
			7,
			true, "horizontal");
	}
	
	// ACTOR THREE
	if(getActorById(dialogueActor_THREE)) {
		actorSetActive(dialogueActor_THREE); 
		actorSetSprite(spriteSheetId);
		actorSetFrame(2);
		actorSetPosition( 
			dialogueOrientation=="right" ? 17 : 6,
			7,
			true, "horizontal");
	}
	
	//----------------------------------------------------//
	//------------------- SECOND ROW ---------------------//
	// ACTOR FOUR
	if(getActorById(dialogueActor_FOUR)) {
		actorSetActive(dialogueActor_FOUR); 
		actorSetSprite(spriteSheetId);
		actorSetFrame(3);
		actorSetPosition( 
			dialogueOrientation=="right" ? 13 : 2,
			9,
			true, "horizontal");
	}
	
	
	// ACTOR FIVE
	if(getActorById(dialogueActor_FIVE)) {
		actorSetActive(dialogueActor_FIVE); 
		actorSetSprite(spriteSheetId);
		actorSetFrame(4);
		actorSetPosition( 
			dialogueOrientation=="right" ? 15 : 4,
			9,
			true, "horizontal");
	}
	
	// ACTOR SIX
	if(getActorById(dialogueActor_SIX)) {
		actorSetActive(dialogueActor_SIX); 
		actorSetSprite(spriteSheetId);
		actorSetFrame(5);
		actorSetPosition( 
			dialogueOrientation=="right" ? 17 : 6,
			9,
			true, "horizontal");
	}
	
	//----------------------------------------------------//
	//------------------- THIRD ROW ----------------------//
	// ACTOR SEVEN
	if(getActorById(dialogueActor_SEVEN)) {
		actorSetActive(dialogueActor_SEVEN); 
		actorSetSprite(spriteSheetId);
		actorSetFrame(6);
		actorSetPosition( 
			dialogueOrientation=="right" ? 13 : 2,
			11,
			true, "horizontal");
	}
	
	// ACTOR EIGHT
	if(getActorById(dialogueActor_EIGHT)) {
		actorSetActive(dialogueActor_EIGHT); 
		actorSetSprite(spriteSheetId);
		actorSetFrame(7);
		actorSetPosition( 
			dialogueOrientation=="right" ? 15 : 4,
			11,
			true, "horizontal");
	}
	
	// ACTOR NINE
	if(getActorById(dialogueActor_NINE)) {
		actorSetActive(dialogueActor_NINE); 
		actorSetSprite(spriteSheetId);
		actorSetFrame(8);
		actorSetPosition( +
			dialogueOrientation=="right" ? 17 : 6,
			11,
			true, "horizontal");
	}
	// --- END ACTOR SPRITE MANIPULATION ----------------------------- //
	// --------------------------------------------------------------- //
	// --------------------------------------------------------------- //
	
	
	
	
	// --- AUTO GENERATE AND FORMAT TEXT TO THE BLOCKS --------------- //
	// --------------------------------------------------------------- //
	// --------------------------------------------------------------- //
	
	const maxPerLine = avatarId ? 16 : 18;
	const maxTotal = avatarId ? 48 : 52;
	
	let dialogueText;
	
	if (Array.isArray(text)) {
		dialogueText = text.slice();
	} else {
		dialogueText = text;
	}
	// Loop through the text modules and split to long texts into
	// a new text module and optional ensure that all text block
	let mod_text;
	warnings(`${JSON.stringify(dialogueText)}`);
	mod_text = autoGenerateTextBlocks(dialogueText,maxPerLine,maxTotal);
	
	
	
	
	if (Array.isArray(mod_text)) {
		
		for (let j = 0; j < mod_text.length; j++) {
			let rowText = mod_text[j];
			
						
			// Before first box, make close instant
			if (j === 0) {
				textSetCloseInstant();
			}
			// Before last box, restore close speed
			if (j === mod_text.length - 1) {
				textRestoreCloseSpeed();
			}
			
			textDialogue(rowText || " ", avatarId);
			
			// After first box, make open instant
			if (j === 0) {
				textSetOpenInstant();
			}
			// After last box, restore open speed
			if (j === mod_text.length - 1) {
				textRestoreOpenSpeed();
			}
		}
	} else {
		textDialogue(mod_text || " ", avatarId);
	}

};

module.exports = {
	id,
	fields,
	compile
};


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