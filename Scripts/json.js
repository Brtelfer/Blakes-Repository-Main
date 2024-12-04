async function setTexts(slidenumber, url) {
    console.log("setTexts function called with slideNumber: " + slidenumber);

    if (slidenumber === undefined || slidenumber === null) {
        console.error("Slide number is undefined or null.");
        return;
    }

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

    // Determine the value of IncorrectPosition based on the value of Key
    const key = texts.Key[index];
    let incorrectPosition;
    if (key === 1) {
        incorrectPosition = "2|3";
    } else if (key === 2) {
        incorrectPosition = "1|3";
    } else if (key === 3) {
        incorrectPosition = "1|2";
    } else {
        console.error(`Invalid key value: ${key}`);
        return;
    }

    // Set the IncorrectPosition variable in Storyline
    player.SetVar("IncorrectPosition", incorrectPosition);
    console.log(`Setting IncorrectPosition to: ${incorrectPosition}`);
}
