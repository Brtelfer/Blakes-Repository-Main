function setTexts(slidenumber) {
    console.log("setTexts function called with slideNumber: " + slidenumber);

    if (slidenumber === undefined || slidenumber === null) {
        console.error("Slide number is undefined or null.");
        return;
    }

    const texts = {
        Correct: ["This is a credit card statement with the amount of money that student owes."],
        IncorrectPrompt: ["Here's a hint, there are dollar amounts on there and itemized activity, what type of document best fit these?"],
        StudentUnderstand: ["Got it! I always get these confused with my car insurance for some reason."],
        QuestionPrompt: ["What kind of document is this?"],
        Choice1: ["Receipt"],
        Choice2: ["Credit Card Statement"],
        Choice3: ["Car Insurance Bill"],
        PositiveFeedbacktoUser: ["Great job!", "Excellent!", "Well done!"],
        NegativeFeedbacktoUser: ["Nice Try!", "Not quite.", "Incorrect."],
        CorrectOrNot: [2, 1, 1, 3, 2, 3, 3, 2, 1, 2, 1, 1, 2, 3, 1, 3, 2, 1, 2, 2, 2, 3, 2, 2],
        Quiz1Option1: ["cleaner"],
        Quiz1Option2: ["cleanliness"],
        Quiz1Option3: ["unclean"],
        Quiz1QuestionPrompt: ["The worker was in charge of the room's __________."],
        Quiz1Key: [2, 1, 3, 1, 2, 2, 3, 3, 2, 1],
        Quiz2Option1: ["management"],
        Quiz2Option2: ["manager"],
        Quiz2Option3: ["unmanage"],
        Quiz2QuestionPrompt: ["The person wanted to get a job in restaurant __________."],
        Quiz2Key: [2, 3, 3, 3, 1, 1, 2, 3, 2, 1]
    };

    const player = GetPlayer();

    const variables = Object.keys(texts);
    variables.forEach(varName => player.GetVar(varName));

    function calculateDuration(text) {
        const words = text.split(" ").length;
        let duration = words * 0.3;
        duration = Math.ceil(duration);
        if (duration > 9) duration = 9;
        return 9 - duration;
    }

    function setText(varName, textArray, index) {
        const text = textArray[index];
        if (text === undefined || text === null) {
            console.error(`${varName} text is undefined or null for slide number:`, slidenumber);
            return;
        }
        console.log(`Setting ${varName} to: ${text}`);
        player.SetVar(varName, text);
        return text;
    }

    const index = slidenumber - 1;

    const randomPositiveFeedback = texts.PositiveFeedbacktoUser[Math.floor(Math.random() * texts.PositiveFeedbacktoUser.length)];
    const randomNegativeFeedback = texts.NegativeFeedbacktoUser[Math.floor(Math.random() * texts.NegativeFeedbacktoUser.length)];

    const textVariables = Object.entries(texts).map(([varName, textArray]) => ({ varName, textArray }));

    if (slidenumber > 10) {
        textVariables = textVariables.filter(item => !item.varName.startsWith('Quiz'));
    }

    textVariables.forEach(({ varName, textArray }) => setText(varName, textArray, index));

    setText("PositiveFeedbacktoUser", [randomPositiveFeedback]);
    setText("NegativeFeedbacktoUser", [randomNegativeFeedback]);

    const durationVariables = [
        "Correct", "IncorrectPrompt", "StudentUnderstand", "QuestionPrompt",
        "Choice1", "Choice2", "Choice3", "PositiveFeedbacktoUser", "NegativeFeedbacktoUser"
    ];

    const durations = {};
    durationVariables.forEach(varName => {
        const text = player.GetVar(varName);
        durations[`${varName}Duration`] = calculateDuration(text);
    });

    Object.entries(durations).forEach(([key, value]) => {
        console.log(`${key}: ${value} seconds`);
        player.SetVar(key, value);
    });
}
