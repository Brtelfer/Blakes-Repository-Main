// Function to initialize the data
function initializeData() {
    return {
    };
}

// Function to set the texts based on the slide number
function setTexts(slidenumber) {
    console.log("setTexts function called with slideNumber: " + slidenumber); // Log the function call

    if (slidenumber === undefined || slidenumber === null) {
        console.error("Slide number is undefined or null.");
        return;
    }

    var data = initializeData();
    var player = GetPlayer();

    // Function to get a random element from an array
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Function to calculate duration based on text length
    function calculateDuration(text) {
        var words = text.split(" ").length;
        var duration = words * 0.3; // Assuming an average reading speed of 200 words per minute (0.3 seconds per word)
        duration = Math.ceil(duration);
        duration = Math.min(duration, 9);
        return 9 - duration;
    }

    // Function to set a variable in the player
    function setPlayerVar(varName, value) {
        console.log("Setting " + varName + " to: " + value);
        player.SetVar(varName, value);
    }

    // Dynamically set variables based on the data
    Object.keys(data).forEach(function(dataKey) {
        if (Array.isArray(data[dataKey])) {
            var value = data[dataKey][slidenumber - 1];
            if (value === undefined || value === null) {
                console.warn(dataKey + " is undefined or null for slide number:", slidenumber);
                return;
            }
            setPlayerVar(dataKey, value);
        }
    });

    // Specifically handle the 'key' array for CorrectOrNot
    if (data.key && data.key[slidenumber - 1] !== undefined) {
        setPlayerVar("CorrectOrNot", data.key[slidenumber - 1]);
    } else {
        console.warn("Key is undefined or null for slide number:", slidenumber);
    }

    // Set random positive and negative feedback
    setPlayerVar("PositiveFeedbacktoUser", getRandomElement(data.positiveFeedbackTexts));
    setPlayerVar("NegativeFeedbacktoUser", getRandomElement(data.negativeFeedbackTexts));

    // Calculate durations for each text variable
    Object.keys(data).forEach(function(dataKey) {
        if (Array.isArray(data[dataKey])) {
            var text = data[dataKey][slidenumber - 1];
            if (text === undefined || text === null) {
                console.warn(dataKey + " text is undefined or null for slide number:", slidenumber);
                return;
            }
            var duration = calculateDuration(text);
            var durationVarName = dataKey + "Duration";
            console.log(durationVarName + ": " + duration + " seconds");
            setPlayerVar(durationVarName, duration);
        }
    });

    // Calculate durations for positive and negative feedback
    var positiveFeedbackDuration = calculateDuration(getRandomElement(data.positiveFeedbackTexts));
    var negativeFeedbackDuration = calculateDuration(getRandomElement(data.negativeFeedbackTexts));

    console.log("PositiveFeedbacktoUserDuration: " + positiveFeedbackDuration + " seconds");
    console.log("NegativeFeedbacktoUserDuration: " + negativeFeedbackDuration + " seconds");

    setPlayerVar("PositiveFeedbacktoUserDuration", positiveFeedbackDuration);
    setPlayerVar("NegativeFeedbacktoUserDuration", negativeFeedbackDuration);
}
