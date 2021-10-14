// Enhanced Dialog Actor Shift for multiple Sprites in 9x Array
// v0.1
// Author: Herr Leise


export const id = "EVENT_HL_ACTOR_DIALOGUE_ENHANCED";

export const name = "Dialogue: Sprite Actor";

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

	var {
		dialogueOrientation,text,avatarId,_placeholder_A,spriteSheetId,
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
	
	
	
	// DEBUG - Remove Comments from below to troubleshoot the current `input` payload
	warnings(`COMPILING: EVENT_HL_ACTOR_DIALOG_ENHANCED`);
	warnings(`Input Payload:`);
	warnings(`${JSON.stringify(input)}`);
	warnings(` `);
	warnings(`--- --- --- --- --- --- --- --- --- --- ---`);
	/*throw new Error(
		`${JSON.stringify(input)}`
	);*/
	
	// Assign the Actor Sprites to referred Actors on Scene
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
		actorSetPosition( 
			dialogueOrientation=="right" ? 17 : 6,
			11,
			true, "horizontal");
	}
	
	
	
	
	if (Array.isArray(text)) {
		// Handle multiple blocks of text
		for (let j = 0; j < text.length; j++) {
			const rowText = text[j];
			
			// Before first box, make close instant
			if (j === 0) {
				textSetCloseInstant();
			}
			// Before last box, restore close speed
			if (j === text.length - 1) {
				textRestoreCloseSpeed();
			}
			
			textDialogue(rowText || " ", avatarId);
			
			// After first box, make open instant
			if (j === 0) {
				textSetOpenInstant();
			}
			// After last box, restore open speed
			if (j === input.text.length - 1) {
				textRestoreOpenSpeed();
			}
		}
	} else {
		textDialogue(text || " ", avatarId);
	}
};

module.exports = {
	id,
	fields,
	compile
};
