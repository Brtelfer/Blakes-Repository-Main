// Global variable to store the message text
var messageText = '';
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var audioBuffer;

// Function to set the message text and initiate text-to-speech
function setMessageTextAndConvert(text) {
    messageText = text;
    convertMessageToSpeech();
}

// Function to convert text to speech using the Web Speech API
function textToSpeech(text) {
    if ('speechSynthesis' in window) {
        console.log('SpeechSynthesis is supported.');

        var voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
            console.log('Available voices:', voices);
            var selectedVoice = voices.find(function(voice) {
                return voice.lang === 'en-US' && voice.name === 'Google US English';
            }) || voices[0];
            console.log('Selected voice:', selectedVoice);
        } else {
            console.log('No voices available.');
        }

        // Split the text into smaller chunks
        var chunkSize = 150; // Adjust the chunk size as needed
        var chunks = splitTextIntoChunks(text, chunkSize);

        speakChunks(chunks, selectedVoice);
    } else {
        console.log('Text-to-speech not supported in this browser.');
    }
}

// Function to split text into smaller chunks
function splitTextIntoChunks(text, chunkSize) {
    var words = text.split(' ');
    var chunks = [];
    var currentChunk = '';

    for (var i = 0; i < words.length; i++) {
        if (currentChunk.length + words[i].length + 1 > chunkSize) {
            chunks.push(currentChunk.trim());
            currentChunk = '';
        }
        currentChunk += words[i] + ' ';
    }

    if (currentChunk.trim().length > 0) {
        chunks.push(currentChunk.trim());
    }

    return chunks;
}

// Function to speak chunks sequentially
function speakChunks(chunks, voice) {
    if (chunks.length > 0) {
        var utterance = new SpeechSynthesisUtterance(chunks[0]);
        utterance.voice = voice;
        utterance.pitch = 1;
        utterance.rate = 0.9;
        utterance.volume = 1;

        // Event handlers for debugging
        utterance.onstart = function() {
            console.log('Speech started.');
        };

        utterance.onend = function() {
            console.log('Speech ended.');
            chunks.shift(); // Remove the first chunk
            speakChunks(chunks, voice); // Speak the next chunk
        };

        utterance.onerror = function(event) {
            console.error('Speech error:', event.error);
        };

        utterance.onpause = function() {
            console.log('Speech paused.');
        };

        utterance.onresume = function() {
            console.log('Speech resumed.');
        };

        utterance.onboundary = function(event) {
            console.log(`Speech reached word boundary at ${event.charIndex} character.`);
        };

        utterance.onmark = function(event) {
            console.log(`Speech reached mark at ${event.charIndex} character.`);
        };

        // Speak the text
        speechSynthesis.speak(utterance);
        console.log('Speech synthesis initiated.');
    } else {
        console.log('All chunks spoken.');
        triggerStorylineAction();
    }
}

// Function to get the text variable from Storyline and convert it to speech
function convertMessageToSpeech() {
    console.log('convertMessageToSpeech function called.');
    if (messageText) {
        console.log('MessageText variable:', messageText);
        textToSpeech(messageText);
    } else {
        console.error('messageText is not set.');
    }
}

// Function to trigger an action in Storyline
function triggerStorylineAction() {
    console.log('triggerStorylineAction function called.');
    var player = GetPlayer();
    if (player) {
        // Example: Set a variable in Storyline
        player.SetVar("TTSCompleted", true);
        console.log('TTSCompleted variable set to true.');

        // You can also navigate to a different slide or perform other actions
        // player.GoToSlide(2); // Example: Navigate to slide 2
    } else {
        console.error('GetPlayer() returned null or undefined.');
    }
}

// Function to load the script with required headers
function loadScriptWithHeaders(url, messageText) {
    fetch('https://cors-anywhere.herokuapp.com/' + url, {
        headers: {
            'Origin': window.location.origin,
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.text())
    .then(data => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = data;
        document.head.appendChild(script);

        // Call the setMessageTextAndConvert function after the script is loaded
        window.setMessageTextAndConvert(messageText);
    })
    .catch(error => {
        console.error('Error loading script:', error);
    });
}

// Function to play correct/incorrect audio using Web Audio API
function playAudio(audioUrl) {
    fetch(audioUrl)
        .then(response => response.arrayBuffer())
        .then(data => audioContext.decodeAudioData(data))
        .then(decodedData => {
            audioBuffer = decodedData;
            var source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContext.destination);
            source.start(0);
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
}

// Get the message text from Storyline
var player = GetPlayer();
if (player) {
    var messageText = player.GetVar("PositiveFeedback");
    console.log('MessageText variable:', messageText);

    // Load the script from the GitHub URL and pass the messageText
    loadScriptWithHeaders('https://raw.githubusercontent.com/Brtelfer/Brtelfer.github.io/refs/heads/main/Scripts/tts.js', messageText);

    // Example: Play correct/incorrect audio
    // playAudio('path/to/correct-audio.mp3');
    // playAudio('path/to/incorrect-audio.mp3');
} else {
    console.error('GetPlayer() returned null or undefined.');
}
