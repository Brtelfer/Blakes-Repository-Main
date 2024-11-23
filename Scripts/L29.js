async function setTexts(slidenumber) {
    console.log("setTexts function called with slideNumber: " + slidenumber);

    if (slidenumber === undefined || slidenumber === null) {
        console.error("Slide number is undefined or null.");
        return;
    }

    const url = 'https://raw.githubusercontent.com/Brtelfer/Brtelfer.github.io/Data/L29.json';
    let texts;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        texts = await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return;
    }

    const player = GetPlayer();

    const variables = Object.keys(texts);
    variables.forEach(varName => {
        console.log(`Getting variable ${varName}:`, player.GetVar(varName));
    });

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

    const randomPositiveFeedback = texts.PositiveFeedback[Math.floor(Math.random() * texts.PositiveFeedback.length)];
    const randomNegativeFeedback = texts.NegativeFeedback[Math.floor(Math.random() * texts.NegativeFeedback.length)];

    const textVariables = Object.entries(texts).map(([varName, textArray]) => ({ varName, textArray }));

    textVariables.forEach(({ varName, textArray }) => setText(varName, textArray, index));

    setText("PositiveFeedback", [randomPositiveFeedback]);
    setText("NegativeFeedback", [randomNegativeFeedback]);

    const durationVariables = [
        "Correct",	"BlankPrompt",	"AskStudent",	"StudentIncorrect",	"StudentCorrect",	"AskUser",	"AgreesWithUser",	"StudentExplanation",	"TeacherMoveOn",	"IncorrectPrompt", "NegativeFeedback", "PositiveFeedback"
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
