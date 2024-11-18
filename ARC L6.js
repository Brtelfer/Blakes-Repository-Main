// Function to load the script with required headers
function loadScriptWithHeaders(url) {
    fetch(url, {
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

        // Call the setTexts function after the script is loaded
        setTexts(1); // Replace 1 with the actual slide number
    })
    .catch(error => {
        console.error('Error loading script:', error);
    });
}

// Load the script from the CORS proxy
loadScriptWithHeaders('https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/Brtelfer/Brtelfer.github.io/main/ARC%20L6.js');

function setTexts(slidenumber) {
    console.log("setTexts function called with slideNumber: " + slidenumber); // Log the function call

    if (slidenumber === undefined || slidenumber === null) {
        console.error("Slide number is undefined or null.");
        return;
    }

    // Define your variables here
    var AskStudentTexts = [
        "student, do you agree?",
        "student, do you agree?",
        "student, do you think this is the right answer?",
        "student, do you agree or disagree with that answer?",
        "student, what do you think about this answer?",
        "student, do you agree with this definition?",
        "student, do you think the definition is correct.",
        "student, do you agree with this?",
        "student, do you agree with the definition selected?",
        "What do you think of the definition that was selected?",
        "student, do you agree with this definition of sprawling?",
        "student, what do you think of this choice?",
        "student, what do you think about this answer?",
        "student, do you agree with this definition?",
        "student, do you agree or disagree with this definition for distinctive?",
        "student, what do you think of the definition that was chosen?",
        "What do you think of this answer, student?",
        "student, what do you think about this definition?",
        "student, what do you think of this answer?",
        "student, do you agree with that answer?",
        "student, what do you think of that answer?",
        "student, do you agree with this answer?",
        "Do you think this is the right definition for the word dense?",
        "What do you think about this answer?",
        "student, do you think that's the correct definition?",
        "What do you think, student?",
        "student, do you agree?",
        "student, do you agree with this answer?",
        "student, what do you think of this answer?",
        "Do you think the right definition was selected for emit?"
    ];
    var AssertionTexts = [
        "The word orbit refers to something that goes around an object. In this case our Earth orbits the sun meaning it goes around in a circular journey around the sun.",
        "The word convenient means easy to use or suits your plans. Since it is easy to compare other orbits to Earth distance is referred to as one astronomical unit.",
        "The word normally means usually or regularly. We usually or regularly mean 24 hours when we say the word day.",
        "The word terrestrial means that something is related to Earth.",
        "The word organism refers to something that is living such as humans or animals. Earth is the only known planet to have living things.",
        "To flourish means to grow or develop. They have found creatures that have grown and developed successfully in an environment.",
        "To be barren means to not produce crops or life. So a planet that is barren has no life on it.",
        "Abundance means having a large amount. Since 70 percent of the earth is water, there is an abundance of water on Earth. There is a large amount of water on Earth.",
        "Essential means to be very important and necessary.",
        "Partially means to be incomplete. So Earth’s atmosphere has a protective layer that almost blocks UV radiation.",
        "Sprawling means to cover a large area in an untidy way. So, here we learn that galaxies cover large areas of the universe and they can appear untidy.",
        "The word consist means to be made or formed from two or more things. So the Milky Way Galaxy is made of a flat disk and spiral arms.",
        "Bulging means that something looks larger and rounder or fuller than normal. So, the Milky Way Galaxy is made up of or consists of a flat disk that has a large and round center with spiral arms.",
        "Galactic can be defined by the enormous size of an object. Galaxies consist of stars, planets, dust, and gas. All of which rotate around the enormous center in a regular manner!",
        "Distinctive means that something is easy to recognize or see because it is different from other things around it. The spinning motion caused by the rotating of the matter in the galaxy causes the disk to take on a recognizable spiral shape. The spiral shape is different from the other shapes seen in the galaxy.",
        "Elongated refers to something that is longer or thinner than usual. Elliptical galaxies may be circular or so thin that they look like a cigar. A cigar looks like an elongated circle because it looks like a stretched out circle that thins out on each end.",
        "Interstellar matter can be referred to as matter that is found between the stars.",
        "The definition for associations is an organization of objects, in this case, an organization of galaxies.",
        "Interact refers to things that have an effect on each other. Galaxies in such groups often effect each other.",
        "When galaxies merge together they combine or join together. The word merge means when two or more things combine or join together.",
        "The word collapsing refers to an object that falls in towards itself. A star burning the last of its fuel may fall in towards itself.",
        "Relatively can mean comparing two or more objects. Black holes formed by the collapse of individual stars are very small. So relatively small means that compared to other things around it that are larger, it is very small.",
        "The word dense refers to a lot of things that are closely put together.",
        "To consume means to use up something. So for example, Black Holes use up the dust and gas from the galaxy.",
        "Populate means that something lives in an area. Small black holes live in the universe.",
        "To spawn means to cause something to be produced or exists.",
        "Plentiful means to have a lot available. There is a lot of matter available in the center of the galaxies.",
        "The word enormous means extremely large. If there is a lot of material available in the center of the galaxies then they grow to be extremely large.",
        "Observational describes the process of watching something carefully and learning from it. If scientists cannot see black holes they cannot learn from them.",
        "To emit means to release or make. So radiation is released as dust and gas are drawn into the dense black holes."
    ];
    var BlankPromptTexts = [
        "User, did you need more time defining the word orbit? I'm not sure either. Let's just give one of the answers a try?",
        "User, did you need more time to pick the definition of the word convenient? Go ahead and give it a shot! I really need your help with this one.",
        "User, did you need more time to pick the definition of the word normally? I need your help with this one.",
        "User, did you need more time to answer the question? I'm sure we can figure it out!",
        "User, did you need more time to define organisms? Try your best! I really need your help with this!",
        "User, did you need more time defining flourish? Give it a try.",
        "User, did you need more time picking a definition for barren? Can you try for me please?",
        "User, did you need more time to define the word abundance? I'm not sure either. Let's just give one of the answers a try?",
        "User, did you need more time to define essential? I'm not sure either. Let's just give one of the answers a try?",
        "User, did you need more time to pick the definition for the word partially? Could you give it a shot?",
        "User, did you need more time picking a definition? Try again now!",
        "User, did you need more time picking a definition for consist? Try again.",
        "User, did you need more time picking a definition? Try again by clicking on an option below.",
        "User, did you need more time picking the definition of galactic? Can you try?",
        "User, did you need more time picking the definition for the word distinctive? I really need your help! Can you help me now?",
        "User, did you need more time picking out the definition? Can you try please?",
        "User, did you need more time trying to find the definition of interstellar? Try clicking a definition below.",
        "User, did you need more time selecting the definition of associations? Me too. Let's try now.",
        "User, did you need more time selecting the definition for the word interact? Will you help me now?",
        "User, did you need more time selecting the definition of the word merge? Me too. Let's try now!",
        "User, did you need more time defining collapsing? Give it a shot!",
        "User, did you need more time defining relatively? Give it another shot!",
        "User, did you need more time picking the definition for the word dense? Please pick a definition below.",
        "User, did you need more time picking the definition for the word consume? Let's try one of the definitions.",
        "User, did you need more time defining the word populate? Let's just try one of these definitions!",
        "User, did you need more time to define the word spawn? I'm not sure of the answer, can you try one?",
        "User, did you need more time picking the definition? I really need your help, can you try please?",
        "User, did you need more time defining enormous? Give it a shot!",
        "User, did you need more time picking the definition of observational? I'm not sure either. Let's just give one of the answers a try?",
        "User, did you need more time to pick the definition for the word emit? I really need your help! Can you give it another shot!"
    ];
    var CorrectTexts = [
        "The word orbit refers to something that goes around an object. In this case our Earth orbits the sun meaning it goes around in a circular journey around the sun.",
        "The word convenient means easy to use or suits your plans. Since it is easy to compare other orbits to Earth distance is referred to as one astronomical unit.",
        "The word normally means usually or regularly. We usually or regularly mean 24 hours when we say the word day.",
        "The word terrestrial means that something is related to Earth.",
        "The word organism refers to something that is living such as humans or animals. Earth is the only known planet to have living things.",
        "To flourish means to grow or develop. They have found creatures that have grown and developed successfully in an environment.",
        "To be barren means to not produce crops or life. So a planet that is barren has no life on it.",
        "Abundance means having a large amount. Since 70 percent of the earth is water, there is an abundance of water on Earth. There is a large amount of water on Earth.",
        "Essential means to be very important and necessary.",
        "Partially means to be incomplete. So Earth’s atmosphere has a protective layer that almost blocks UV radiation.",
        "Sprawling means to cover a large area in an untidy way. So, here we learn that galaxies cover large areas of the universe and they can appear untidy.",
        "The word consist means to be made or formed from two or more things. So for example the Milky Way Galaxy is made of a flat disk and spiral arms.",
        "Bulging means that something looks larger and rounder or fuller than normal. So, the Milky Way Galaxy is made up of or consists of a flat disk that has a large and round center with spiral arms.",
        "Galactic can be defined by the enormous size of an object. Galaxies consist of stars, planets, dust, and gas. All of which rotate around the enormous center in a regular manner!",
        "Distinctive means that something is easy to recognize or see because it is different from other things around it. The spinning motion caused by the rotating of the matter in the galaxy causes the disk to take on a recognizable spiral shape. The spiral shape is different from the other shapes seen in the galaxy.",
        "Elongated refers to something that is longer or thinner than usual. Elliptical galaxies may be circular or so thin that they look like a cigar. A cigar looks like an elongated circle because it looks like a stretched out circle that thins out on each end.",
        "Interstellar matter can be referred to as matter that is found between the stars.",
        "The definition for associations is an organization of objects, in this case, an organization of galaxies.",
        "Interact refers to things that have an effect on each other. Galaxies in such groups often effect each other.",
        "When galaxies merge together they combine or join together. The word merge means when two or more things combine or join together.",
        "The word collapsing refers to an object that falls in towards itself. A star burning the last of its fuel may fall in towards itself.",
        "Relatively can mean comparing two or more objects. Black holes formed by the collapse of individual stars are very small. So relatively small means that compared to other things around it that are larger, it is very small.",
        "The word dense refers to a lot of things that are closely put together.",
        "To consume means to use up something. So for example, Black Holes use up the dust and gas from the galaxy.",
        "Populate means that something lives in an area. Small black holes live in the universe.",
        "To spawn means to cause something to be produced or exists.",
        "Plentiful means to have a lot available. There is a lot of matter available in the center of the galaxies.",
        "The word enormous means extremely large. If there is a lot of material available in the center of the galaxies then they grow to be extremely large.",
        "Observational describes the process of watching something carefully and learning from it. If scientists cannot see black holes they cannot learn from them.",
        "To emit means to release or make. So radiation is released as dust and gas are drawn into the dense black holes."
    ];
    var IncorrectPromptTexts = [
        "Let's look at a clue to define the word orbit. You know the Earth goes around the sun at 93 million miles on average. This path that earth takes is called an orbit. So, now, can you tell me what the word orbit means? Choose from the options below.",
        "The context clue says compare other orbits to Earth's orbit. Would it be easier or harder to compare other orbits to Earth's orbit? Would it be easier or harder to compare orbits from Mars to other orbits? No, because we are not on Mars. Use this clue as a hint to defining the word convenient. Try again to pick the correct choice from below.",
        "When we refer to a day we normally mean 24 hours. What is the definition of the word normally based on the sentence?",
        "The context clue shown here is the phrase, there are other planets listed that have similar properties to Earth. What does the word terrestrial mean? Try again to pick the right answer from below.",
        "Since Earth is the only known planet to support organisms, what does this clue tell you about the definition for the word organism? Pick from the answer options below.",
        "Let's take a look at the context clue here. The word flourish is related to the idea of scientists discovering new creatures that were successfully living in an environment for years. Please use this information to choose the definition of the word flourish from below.",
        "The word contrast tells us that the other planets are different from Earth and they are different in the way that they are lifeless. The word lifeless can be related to the word barren. Define the word barren. Choose from the answers below.",
        "Ok, let's use the context clues shown here and try to define the word abundance. Can you give it another try? Choose an answer below.",
        "Let's again refer to the context clues. Please try to define the word essential. Pick an answer below.",
        "Here are the context clues that can help you define the word partially. Define the word partially based on the clues, and choose an answer below.",
        "Ok, let's look at the context clues, countless. If there are countless numbers of stars that cannot be counted, will these stars cover a small area or will they cover large areas? Use this hint to define the word sprawling. Please give this question another try and choose an answer below.",
        "Take a look at the context clues that are shown here. Try to refer to the phrase includes stars, planets, dust, and gas. All of these things create a galaxy, so what is the definition of the word consist? Choose an answer below.",
        "Let's take a look at the context clues shown here. Try to use the word flat to get the definition of bulging. The word flat is the opposite of the word bulging. Give this question another shot. Press on an answer below.",
        "Let's look at the word bulging. This is a word student had trouble with earlier but we found out that it means to look larger or fuller. Like the word bulging, the word galactic is being used to describe the center of galaxies. So we can guess the word galactic means something similar to large and full. Use this hint to define the word galactic. Press one of the answers below.",
        "Refer to the context clues shown here. The entire sentence provides clues for the definition. If the spinning motion causes the matter to look like a pinwheel, and nothing else looks like this, then the pinwheel shape is. Choose an answer below.",
        "User, refer to the context clues shown. The word elongated is related to the word stretch! Please pick the definition for elongated.",
        "Elliptical galaxies and what they are made up of can help you to define the word interstellar. These types of galaxies contain little dust and older stars. These things are considered interstellar matter. Give it another try. Choose from the answers provided.",
        "Take a look at the context clues shown here. The words in the highlighted phrase, groups, clusters and superclusters, all describe number of things placed together. Can you guess what the definition is now? Press on an answer.",
        "Refer to the context clues shown here. The word, interact, can be related to the word, together. If things are together then what do they do? Please try again. Pick the definition for the word interact.",
        "Here are a few context clues. Refer to them when trying to select the definition for the word merge. Can you try again to answer the question.",
        "Let's refer to the context clues here. These phrases will give you a clue to the definition for the word collapsing. Try again to pick the right answer.",
        "Ok. Let's look at the context clues in the sentence here. It says that black holes formed by the collapse of individual stars are relatively small, but really dense. This means black holes are somewhat small compared to other things around it. What could the word relatively mean? Give this question another try by selecting a choice from below.",
        "Let's use the context clues in the passage here. The word packs should give you a clue to the definition of the word dense. When you are ready, try again to pick the correct definition.",
        "Ok. Look at the context clues here. The words growing, around, dust and gas can be clues for finding the definition of the word consume. Try again. Press on an answer choice.",
        "Here are a few clues that can help you define the word populate. The word dominate means to be take over or have more of. So if there are more supermassive black holes than small black holes, these two types of black holes make up the universe. Use this clue to define populate. Press an answer choice below.",
        "Let's look at the clues here! Look at the word formed, the word form is related to the word spawn. Try again. Choose from the answers below.",
        "Refer to the context clues in the passage. Since there are dust and gas easily gathered in the galaxy that means there must be a lot of this available. Use this clue to define the word plentiful. Choose from the answers below.",
        "Refer to the clue here. The words grow and plentiful can give you more insight into the definition of the word enormous. The word grow and enormous can be used to describe what something does or is. Pick the correct definition for enormous.",
        "The word observational is similar in meaning to the word, see, in the passage. If scientists can’t see black holes then they can’t learn from them. Please pick the definition for the word observational.",
        "Let's again use context clues to help us. We know that as dust and gas are drawn into black holes, radiation is emitted. Use this information to define the word emitted. Please choose an answer below."
    ];
    var StudentAgreeTexts = [
        "Yes I do.",
        "I agree!",
        "User, I think you picked the right definition for the word.",
        "I agree with this answer!",
        "I agree with this answer!",
        "I agree!",
        "I think the definition is correct!",
        "I agree!",
        "Yes I agree!",
        "I think that definition is the correct one.",
        "It sounds right to me.",
        "I think this is the correct definition of consist.",
        "I think that is the right definition!",
        "Yes I agree!",
        "I agree with this definition!",
        "I think this is the right definition for the word elongated. The word long is in it therefore I would think it would mean longer or thinner.",
        "I think this answer is right!",
        "I think that is a good answer. I think its correct.",
        "I think that's the right answer.",
        "Sounds right to me.",
        "I think this is the right answer.",
        "I think this is the correct definition!",
        "Yes I do!",
        "I think this answer is correct!",
        "I actually think that's the right answer.",
        "I agree",
        "I agree with this definition.",
        "I agree with this definition!",
        "I agree!",
        "I agree!"
    ];
    var StudentAnswerAgreeTexts = [
        "User, great job! So orbits means to go around something. Like how the moon goes around the earth, it orbits the earth.",
        "I knew you had it. So is that why some stores are called convenient stores, you can find things easily and they have almost anything you could think of.",
        "That was great! So saying I normally say hello to others means I usually say hello to people.",
        "Great job! So terrestrial is something from earth, so we are terrestrials because we live on earth.",
        "User, I had a feeling you picked the right definition. Awesome! So people are organisms because we are living things.",
        "Awesome that was the right definition for flourish. So flourish means to grow or develop. Like flowers! They grow!",
        "I knew that was the right answer! So land can be barren when there is no life! So the desert may be considered barren because people cannot live out there.",
        "Ok. So when something is abundant there is a large amount. So to have an abundance of cupcakes means I have a large amount of cupcakes.",
        "I got it. So when something is essential it is very important and necessary. So water is very essential or important for people to drink.",
        "User, I knew you got it. So partially means something is not complete. So when people say to partially fill up your gas tank that means to fill it up but not completely.",
        "I thought this was the correct answer! An example is a forest. A forest is sprawling because it covers a large area!",
        "So that's what that means when people ask, 'What did your day consist of?' They are asking what was my day made up of. I thought so.",
        "User, great you picked the right definition! So for example, my backpack bulges when it is too full of stuff.",
        "I knew that was the right definition! A galactic book means that the book is enormous! I think I'm understanding it.",
        "I thought that was the right answer! So something is distinctive if it stands out or looks different, like an 18-wheeler. 18-wheelers are distinctive trucks because they are larger and different than the smaller cars we are used to seeing.",
        "I knew this was the correct definition. So stretching your muscles can make them elongated or longer and soon you will be flexible.",
        "So a spaceship would be interstellar because it floats between the stars and planets. I think I got it now.",
        "I had a feeling this was the right definition! So an organization of objects, like a collection of stars.",
        "I knew we picked the right answer! Two things that interact with each other would be the moon and the earth because they rotate around each other!",
        "Ok. I got it. So the word merge means two or more things coming together.",
        "Great job! So the definition of collapsing you picked was right, it means to fall down. Like when I collapse or fall down by accident.",
        "So relatively is used to compare things. So for example, how flowers smell relatively better than dirt. All that means is overall flowers smell better than dirt. Thanks!",
        "Awesome! So when people say they have a dense book, that means that there is a lot of pages in the book.",
        "I knew this was the right choice. So black holes consume or use up dust from the galaxy like us when we consume or use up food for energy.",
        "User, great job! I knew you picked the right definition. So black holes populate the universe just like people who populate cities.",
        "Your choice was correct! Great! So to spawn means to produce, so when a group of tomatoes are spawned that means they were produced.",
        "Great job! So, when dust is plentiful I sneeze, because this means that there is a lot of available dust!",
        "Great job! So enormous means to be extremely large, like the sun. The sun is enormous or extremely large.",
        "I knew that was the correct answer! So observational means to watch and learn from something. If you cannot see how someone plays an instrument you cannot learn how to play yourself.",
        "Great! So emit means to release like a blow dryer emits heat and a light bulb emits light."
    ];
    var StudentAnswerUnderstandTexts = [
        "Ok, that answer makes sense. I get it now. So when the moon orbits the earth it goes around it. Got it!",
        "Oh I thought you picked the wrong definition. So being easy to use is what convenient means. So is that why some stores are called convenient stores, you can find things easily and they have almost anything you could think of.",
        "Gotcha, so you did pick the right definition for the word normally. So saying I normally say hello to others means I usually say hello to people.",
        "Looks like I was wrong! So terrestrial is something from earth. So we are terrestrials because we live on earth.",
        "I was totally wrong. So people are organisms because we are living things.",
        "So flourish means to grow or develop. Like flowers! They grow!",
        "Now I understand. So land can be barren when there is no life! So the desert may be considered barren because people cannot live out there.",
        "So when something is abundant there is a large amount. So to have an abundance of cupcakes means I have a large amount of cupcakes.",
        "Ok. Now I see. So when something is essential it is very important and necessary. So water is very essential or important for people to drink.",
        "Oh shoot. I was totally wrong! So partially means something is not complete. So when people say to partially fill up your gas tank that means to fill it up but not completely.",
        "I see how I was wrong. I thought sprawling meant injure yourself because sprawl rhymes with fall.",
        "Ok. That answer makes sense. So consist means to be made of something, like a car is made up of an engine and tires.",
        "I see! Something bulges, like my backpack, when it is fuller than normal.",
        "Oh I see! So for example, if something is galactic it is enormous. A galactic building is an enormous building.",
        "I see. So something is distinctive if it stands out or is different like an 18-wheeler. 18-wheelers are distinctive trucks because they are larger and different than the smaller cars we are used to seeing.",
        "User, I guess you picked the right answer after all! To elongate a muscle means to stretch it out or make it longer. Now I understand the definition.",
        "I see. So something is interstellar if it is between stars, like a spaceship!",
        "Oh ok, that answer makes sense. So an organization of stars as well as galaxies can be found in space.",
        "I was wrong! Interact doesn't mean to act or acting. It just sounds like it.",
        "I knew that was the right definition for merge. An example of something that merges together would be lanes on the expressway. Like galaxies, these lanes combine together to make one lane.",
        "Oh I think I understand. So when I collapse, that means that I've fallen down. All of this is starting to make sense!",
        "Looks like I was wrong. Relatively is used when you compare things, so like comparing flowers to dirt, flowers smell relatively better than dirt, meaning flowers smell better overall when compared to dirt.",
        "I thought you picked the wrong definition! So for stars to be dense, that means they have a lot of material that is close together.",
        "Ok. It looks like I was wrong, black holes consume or use up dust from the galaxy like us when we consume or use up food for energy.",
        "I see. So black holes populate the universe just like people when they populate a city.",
        "Oh ok. So spawn means to produce, like when a group of tomatoes are spawned that means they were produced.",
        "Sorry, I guess that was the right answer! Something is plentiful when there is a lot of it.",
        "User, okay so you were right! So enormous means really extremely large, so the sun is enormous because it is really large.",
        "I guess I was wrong but now I get it. So if you do not carefully observe or watch how someone plays an instrument you cannot learn how to play yourself. I get the idea.",
        "I guess you were right correct. Emit means to release like a blow dryer emits heat and a light bulb emits light."
    ];
    var StudentDisagreeTexts = [
        "It doesn't sound right to me.",
        "No, I think it's wrong but I don't know why.",
        "I honestly don't know but it doesn't sound right.",
        "I do not agree with this answer, I think it's something else.",
        "I feel like this is wrong.",
        "I think this is the wrong answer but I'm not sure.",
        "I think the definition is wrong for some reason.",
        "I feel like it's not the right answer.",
        "It doesn't sound right to me.",
        "I have a feeling that it's not the right answer.",
        "I don't know, I thought sprawling meant to injure your body.",
        "I don't know, that does not sound right to me.",
        "Teacher, I don't think this answer is right.",
        "It does not sound right to me. Is it wrong?",
        "Is it wrong?",
        "I think this isn't the right definition.",
        "I can't say if that is the right definition. I'm not really sure.",
        "Is it wrong?",
        "I don't think that's the right answer. When I hear interact I think of acting but there's no answer option for acting below.",
        "I see, so when things merge they come together, like when lanes merge while you are driving.",
        "I honestly don't know if this is correct. But if I had to choose I would say it's a different answer.",
        "I don't know, it doesn't sound right to me.",
        "I get the feeling that this is the wrong option.",
        "No, I feel like it's not right.",
        "I feel like it was the wrong answer.",
        "It doesn't sound right to me.",
        "I don't think this is right.",
        "It doesn't sound right to me.",
        "I think it is wrong for some reason.",
        "I feel like it's not the right answer."
    ];
    var StudentUnderstandTexts = [
        "I see now! So orbits means to go around something, like how the moon goes around the earth, it orbits the earth.",
        "Ok. I understand. So convenient means something is easy to use. So is that why some stores are called convenient stores, you can find things easily and they have almost anything you could think of.",
        "I understand now, so normally can mean usually. So saying I normally say hello to others means I usually say hello to people.",
        "Got it! So it means something that is related to Earth.",
        "Ok, now I think I understand. So organisms are living things, so people are organisms because we are living things.",
        "I understand. So flourish means to grow or develop. Like flowers! They grow!",
        "Great. Now I see! So land can be barren when there is no life! So the desert may be considered barren because people cannot live out there.",
        "I understand. So when something is abundant, there is a large amount. So to have an abundance of cupcakes means I have a large amount of cupcakes.",
        "Now I understand. When something is essential it is very important and necessary. So water is very essential or important for people to drink.",
        "I understand now! So partially means something is not complete. So when people say to partially fill up your gas tank that means to fill it up but not completely.",
        "Ok. I get it. So for example, a forest is sprawling because it covers a large area just like a galaxy!",
        "Ok. I think I understand. So consist means to be made up of something, so for example, a pizza consists of cheese and dough. That means a pizza is made up of cheese and dough!",
        "That makes sense. So something bulges when it is too full or large, like my backpack when I pack too much stuff in it.",
        "So when my mother says there is a galactic sale at the mall, she means there is an enormous sale! Ok, now I get it.",
        "I see. So something is distinctive when it looks different, like an 18-wheeler. 18-wheelers are distinctive trucks because they are larger and different than the smaller cars we are used to seeing.",
        "So if someone stretches their muscles, this elongates them or makes them longer. I think I understand the definition now.",
        "So something is interstellar if it is between stars, like a spaceship!",
        "I see. So a collection or organization of cars would be considered an association of cars.",
        "So things interact when they effect each other, like the moon effecting the earth and the earth effecting the moon.",
        "I don't know, I don't think it sounds right.",
        "I see. So when you collapse over something that means the same thing as you falling over something.",
        "I think I get it. So you use relatively when you want to compare one thing to another. Flowers smell relatively better than dirt, that means that overall flowers smell better than dirt.",
        "I understand. So for stars to be dense that means they have a lot of materials like gas and dust that are really close together.",
        "So black holes consume or use up dust from the galaxy just like humans when we consume or use up food for energy.",
        "So black holes populate the universe just like people populate a city.",
        "Ok. I see. So when a group of tomatoes are spawned that means they were produced.",
        "Right. I understand. So plentiful means to have a lot. When dust is plentiful I sneeze, because there is a lot of available dust.",
        "Ok. That answer makes sense. I think I get it now. So the sun is enormous, because it is extremely large!",
        "So if you do not watch carefully how someone plays an instrument you cannot learn how to play yourself. I got the idea!",
        "I see so to emit something means to release it. So a blow dryer emits heat and a light bulb emits light."
    ];
    var NegativeFeedbackTexts = ["Sorry. It looks like you picked the wrong answer.", "Sorry that answer is incorrect.", "Sorry that answer is not quite right."];
    var PositiveFeedbackTexts = ["Great job!", "Excellent!", "Well done!"];
    var PositiveFeedbackUsTexts = [
        "Yes! |AND| We answered the question right!",
        "We did it! |AND| We answered the question correctly!",
        "Great job. |AND| We answered the question correctly!",
        "Yes! |AND| We both picked the correct answer!",
        "We both picked the right answer!",
        "We're awesome. |AND| We picked the same answer! |AND| And it was right!",
        "We're awesome we picked the same answer! |AND| And it was correct!",
        "Amazing! |AND| We both answered correctly!",
        "Sweet. |AND| We answered correctly! |AND| Great job!",
        "We answered the question correctly! |AND| This is great!"
    ];
    var PositiveFeedbackToBothTexts = [
        "Good job, both of you.",
        "Wow, you both did great.",
        "You are both correct, great work."
    ];

    var Key = [3, 3, 1, 1, 3, 3, 3, 2, 2, 2, 3, 3, 2, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

    var quiz1QuestionPromptTexts = [
        "There are _________ galaxies.",
        "Galaxies ________ around the galactic center.",
        "Stars ________ to form black holes.",
        "Galaxies are _________ composed of stars.",
        "Earth orbit is similar to the ___________ of Mercury, Venus, and Mars.",
        "circular",
        "merge",
        "essential",
        "massive"
    ];
    var quiz1Option1Texts = [
        "countless",
        "spin",
        "collapse",
        "also",
        "planets",
        "round",
        "join",
        "necessary",
        "large"
    ];
    var quiz1Option2Texts = [
        "discount",
        "spins",
        "collapses",
        "although",
        "spaceship",
        "long",
        "separate",
        "wanted",
        "middle"
    ];
    var quiz1Option3Texts = [
        "recount",
        "spinning",
        "collapsing",
        "so",
        "craters",
        "glass",
        "manage",
        "fuzzy",
        "back"
    ];
    var quiz1Key = [2, 1, 3, 1, 2, 3, 3, 1, 2];

    var quiz2Texts = [
        "Houses are selling for astronomical prices.",
        "Supermassive black holes are enormously large compared to small black holes.",
        "Notably, galaxies are often found in groups or clusters.",
        "Earth's atmosphere has an ozone layer. Consequently, ultraviolet radiation cannot reach the Earth's surface.",
        "In the case of black holes, nothing can escape.",
        "Supermassive black holes exist in outer space emitting radiation that is emitted as dust and gas.",
        "irregular",
        "rift",
        "feature",
        "collapse",
        "escape",
        "format"
    ];
    var quiz2Option1Texts = [
        "astronomical",
        "relative",
        "Notably",
        "Otherwise",
        "Instead of",
        "As revealed by",
        "square",
        "burn",
        "clean",
        "break",
        "jog"
    ];
    var quiz2Option2Texts = [
        "astronomy",
        "relatively",
        "Either",
        "Consequently",
        "In the case of",
        "For example",
        "same",
        "divided",
        "trait",
        "size",
        "lock"
    ];
    var quiz2Option3Texts = [
        "astronomer",
        "relatives",
        "In the case of",
        "Instead of",
        "Indeed",
        "Notably",
        "uneven",
        "box",
        "building",
        "right",
        "free"
    ];
    var quiz2Key = [2, 3, 1, 3, 1, 1, 3, 2, 3, 1, 3];

    var player = GetPlayer();

    player.GetVar("AskStudent");
    player.GetVar("Assertion");
    player.GetVar("BlankPrompt");
    player.GetVar("Correct");
    player.GetVar("IncorrectPrompt");
    player.GetVar("StudentAgree");
    player.GetVar("StudentAnswerAgree");
    player.GetVar("StudentAnswerUnderstand");
    player.GetVar("StudentDisagree");
    player.GetVar("StudentUnderstand");
    player.GetVar("NegativeFeedback");
    player.GetVar("PositiveFeedbacktoUser");
    player.GetVar("PositiveFeedbackUs");
    player.GetVar("PositiveFeedbackToBoth");
    player.GetVar("Choice1");
    player.GetVar("Choice2");
    player.GetVar("Choice3");
    player.GetVar("QuestionPrompt");
    player.GetVar("CorrectOrNot");
    player.GetVar("Quiz1Option1");
    player.GetVar("Quiz1Option2");
    player.GetVar("Quiz1Option3");
    player.GetVar("Quiz1QuestionPrompt");
    player.GetVar("Quiz1Key");
    player.GetVar("Quiz2Option1");
    player.GetVar("Quiz2Option2");
    player.GetVar("Quiz2Option3");
    player.GetVar("Quiz2QuestionPrompt");
    player.GetVar("Quiz2Key");

    function calculateDuration(text) {
        var words = text.split(" ").length;
        var duration = words * 0.3; // Assuming an average reading speed of 200 words per minute (0.3 seconds per word)

        // Round up to the nearest whole second
        duration = Math.ceil(duration);

        // Ensure the duration does not exceed 9 seconds
        if (duration > 9) {
            duration = 9;
        }

        // Inverse the duration for a countdown timer
        duration = 9 - duration;

        return duration;
    }

    // Log the text being set for each variable
    var AskStudentText = AskStudentTexts[slidenumber - 1];
    if (AskStudentText === undefined || AskStudentText === null) {
        console.error("AskStudent text is undefined or null for slide number:", slidenumber);
        return;
    }
    console.log("Setting AskStudent to: " + AskStudentText);
    player.SetVar("AskStudent", AskStudentText);

    var AssertionText = AssertionTexts[slidenumber - 1];
    console.log("Setting Assertion to: " + AssertionText);
    player.SetVar("Assertion", AssertionText);

    var BlankPromptText = BlankPromptTexts[slidenumber - 1];
    console.log("Setting BlankPrompt to: " + BlankPromptText);
    player.SetVar("BlankPrompt", BlankPromptText);

    var CorrectText = CorrectTexts[slidenumber - 1];
    console.log("Setting Correct to: " + CorrectText);
    player.SetVar("Correct", CorrectText);

    var IncorrectPromptText = IncorrectPromptTexts[slidenumber - 1];
    console.log("Setting IncorrectPrompt to: " + IncorrectPromptText);
    player.SetVar("IncorrectPrompt", IncorrectPromptText);

    var StudentAgreeText = StudentAgreeTexts[slidenumber - 1];
    console.log("Setting StudentAgree to: " + StudentAgreeText);
    player.SetVar("StudentAgree", StudentAgreeText);

    var StudentAnswerAgreeText = StudentAnswerAgreeTexts[slidenumber - 1];
    console.log("Setting StudentAnswerAgree to: " + StudentAnswerAgreeText);
    player.SetVar("StudentAnswerAgree", StudentAnswerAgreeText);

    var StudentAnswerUnderstandText = StudentAnswerUnderstandTexts[slidenumber - 1];
    console.log("Setting StudentAnswerUnderstand to: " + StudentAnswerUnderstandText);
    player.SetVar("StudentAnswerUnderstand", StudentAnswerUnderstandText);

    var StudentDisagreeText = StudentDisagreeTexts[slidenumber - 1];
    console.log("Setting StudentDisagree to: " + StudentDisagreeText);
    player.SetVar("StudentDisagree", StudentDisagreeText);

    var StudentUnderstandText = StudentUnderstandTexts[slidenumber - 1];
    console.log("Setting StudentUnderstand to: " + StudentUnderstandText);
    player.SetVar("StudentUnderstand", StudentUnderstandText);

    var NegativeFeedbackText = NegativeFeedbackTexts[slidenumber - 1];
    console.log("Setting NegativeFeedback to: " + NegativeFeedbackText);
    player.SetVar("NegativeFeedback", NegativeFeedbackText);

    // Randomly select positive feedback
    var randomPositiveFeedback = PositiveFeedbackTexts[Math.floor(Math.random() * PositiveFeedbackTexts.length)];

    console.log("Setting PositiveFeedbacktoUser to: " + randomPositiveFeedback);
    player.SetVar("PositiveFeedbacktoUser", randomPositiveFeedback);

    // Randomly select PositiveFeedbackUs
    var randomPositiveFeedbackUs = PositiveFeedbackUsTexts[Math.floor(Math.random() * PositiveFeedbackUsTexts.length)];

    console.log("Setting PositiveFeedbackUs to: " + randomPositiveFeedbackUs);
    player.SetVar("PositiveFeedbackUs", randomPositiveFeedbackUs);

    // Randomly select PositiveFeedbackToBoth
    var randomPositiveFeedbackToBoth = PositiveFeedbackToBothTexts[Math.floor(Math.random() * PositiveFeedbackToBothTexts.length)];

    console.log("Setting PositiveFeedbackToBoth to: " + randomPositiveFeedbackToBoth);
    player.SetVar("PositiveFeedbackToBoth", randomPositiveFeedbackToBoth);

    // Set question prompt and choices
    var questionPrompt = questionPromptTexts[slidenumber - 1];
    console.log("Setting QuestionPrompt to: " + questionPrompt);
    player.SetVar("QuestionPrompt", questionPrompt);

    var choice1 = Choice1Texts[slidenumber - 1];
    var choice2 = Choice2Texts[slidenumber - 1];
    var choice3 = Choice3Texts[slidenumber - 1];

    console.log("Setting Choice1 to: " + choice1);
    player.SetVar("Choice1", choice1);

    console.log("Setting Choice2 to: " + choice2);
    player.SetVar("Choice2", choice2);

    console.log("Setting Choice3 to: " + choice3);
    player.SetVar("Choice3", choice3);

    // Set CorrectOrNot based on the Key
    var correctOrNot = Key[slidenumber - 1];
    console.log("Setting CorrectOrNot to: " + correctOrNot);
    player.SetVar("CorrectOrNot", correctOrNot);

    // Check if quiz variables are defined before accessing them
    if (slidenumber <= 9) {
        var quiz1Option1 = quiz1Option1Texts[slidenumber - 1];
        var quiz1Option2 = quiz1Option2Texts[slidenumber - 1];
        var quiz1Option3 = quiz1Option3Texts[slidenumber - 1];
        var quiz1QuestionPrompt = quiz1QuestionPromptTexts[slidenumber - 1];
        var quiz1Key = quiz1Key[slidenumber - 1];

        console.log("Setting Quiz1Option1 to: " + quiz1Option1);
        player.SetVar("Quiz1Option1", quiz1Option1);

        console.log("Setting Quiz1Option2 to: " + quiz1Option2);
        player.SetVar("Quiz1Option2", quiz1Option2);

        console.log("Setting Quiz1Option3 to: " + quiz1Option3);
        player.SetVar("Quiz1Option3", quiz1Option3);

        console.log("Setting Quiz1QuestionPrompt to: " + quiz1QuestionPrompt);
        player.SetVar("Quiz1QuestionPrompt", quiz1QuestionPrompt);

        console.log("Setting Quiz1Key to: " + quiz1Key);
        player.SetVar("Quiz1Key", quiz1Key);
    } else {
        console.log("Quiz1 variables are undefined for slide number:", slidenumber);
    }

    if (slidenumber <= 11) {
        var quiz2Option1 = quiz2Option1Texts[slidenumber - 1];
        var quiz2Option2 = quiz2Option2Texts[slidenumber - 1];
        var quiz2Option3 = quiz2Option3Texts[slidenumber - 1];
        var quiz2QuestionPrompt = quiz2Texts[slidenumber - 1];
        var quiz2Key = quiz2Key[slidenumber - 1];

        console.log("Setting Quiz2Option1 to: " + quiz2Option1);
        player.SetVar("Quiz2Option1", quiz2Option1);

        console.log("Setting Quiz2Option2 to: " + quiz2Option2);
        player.SetVar("Quiz2Option2", quiz2Option2);

        console.log("Setting Quiz2Option3 to: " + quiz2Option3);
        player.SetVar("Quiz2Option3", quiz2Option3);

        console.log("Setting Quiz2QuestionPrompt to: " + quiz2QuestionPrompt);
        player.SetVar("Quiz2QuestionPrompt", quiz2QuestionPrompt);

        console.log("Setting Quiz2Key to: " + quiz2Key);
        player.SetVar("Quiz2Key", quiz2Key);
    } else {
        console.log("Quiz2 variables are undefined for slide number:", slidenumber);
    }

    // Calculate durations for each text variable
    var AskStudentDuration = calculateDuration(AskStudentText);
    var AssertionDuration = calculateDuration(AssertionText);
    var BlankPromptDuration = calculateDuration(BlankPromptText);
    var CorrectDuration = calculateDuration(CorrectText);
    var IncorrectPromptDuration = calculateDuration(IncorrectPromptText);
    var StudentAgreeDuration = calculateDuration(StudentAgreeText);
    var StudentAnswerAgreeDuration = calculateDuration(StudentAnswerAgreeText);
    var StudentAnswerUnderstandDuration = calculateDuration(StudentAnswerUnderstandText);
    var StudentDisagreeDuration = calculateDuration(StudentDisagreeText);
    var StudentUnderstandDuration = calculateDuration(StudentUnderstandText);
    var NegativeFeedbackDuration = calculateDuration(NegativeFeedbackText);
    var questionPromptDuration = calculateDuration(questionPrompt);
    var choice1Duration = calculateDuration(choice1);
    var choice2Duration = calculateDuration(choice2);
    var choice3Duration = calculateDuration(choice3);

    // Calculate durations for positive feedback
    var positiveFeedbackDuration = calculateDuration(randomPositiveFeedback);
    var positiveFeedbackUsDuration = calculateDuration(randomPositiveFeedbackUs);
    var positiveFeedbackToBothDuration = calculateDuration(randomPositiveFeedbackToBoth);

    // Log the calculated durations
    console.log("AskStudent Duration: " + AskStudentDuration + " seconds");
    console.log("Assertion Duration: " + AssertionDuration + " seconds");
    console.log("BlankPrompt Duration: " + BlankPromptDuration + " seconds");
    console.log("Correct Duration: " + CorrectDuration + " seconds");
    console.log("IncorrectPrompt Duration: " + IncorrectPromptDuration + " seconds");
    console.log("StudentAgree Duration: " + StudentAgreeDuration + " seconds");
    console.log("StudentAnswerAgree Duration: " + StudentAnswerAgreeDuration + " seconds");
    console.log("StudentAnswerUnderstand Duration: " + StudentAnswerUnderstandDuration + " seconds");
    console.log("StudentDisagree Duration: " + StudentDisagreeDuration + " seconds");
    console.log("StudentUnderstand Duration: " + StudentUnderstandDuration + " seconds");
    console.log("NegativeFeedback Duration: " + NegativeFeedbackDuration + " seconds");
    console.log("QuestionPrompt Duration: " + questionPromptDuration + " seconds");
    console.log("Choice1 Duration: " + choice1Duration + " seconds");
    console.log("Choice2 Duration: " + choice2Duration + " seconds");
    console.log("Choice3 Duration: " + choice3Duration + " seconds");
    console.log("PositiveFeedbacktoUser Duration: " + positiveFeedbackDuration + " seconds");
    console.log("PositiveFeedbackUs Duration: " + positiveFeedbackUsDuration + " seconds");
    console.log("PositiveFeedbackToBoth Duration: " + positiveFeedbackToBothDuration + " seconds");

    // Store the calculated durations in Storyline variables
    player.SetVar("AskStudentDuration", AskStudentDuration);
    player.SetVar("AssertionDuration", AssertionDuration);
    player.SetVar("BlankPromptDuration", BlankPromptDuration);
    player.SetVar("CorrectDuration", CorrectDuration);
    player.SetVar("IncorrectPromptDuration", IncorrectPromptDuration);
    player.SetVar("StudentAgreeDuration", StudentAgreeDuration);
    player.SetVar("StudentAnswerAgreeDuration", StudentAnswerAgreeDuration);
    player.SetVar("StudentAnswerUnderstandDuration", StudentAnswerUnderstandDuration);
    player.SetVar("StudentDisagreeDuration", StudentDisagreeDuration);
    player.SetVar("StudentUnderstandDuration", StudentUnderstandDuration);
    player.SetVar("NegativeFeedbackDuration", NegativeFeedbackDuration);
    player.SetVar("QuestionPromptDuration", questionPromptDuration);
    player.SetVar("Choice1Duration", choice1Duration);
    player.SetVar("Choice2Duration", choice2Duration);
    player.SetVar("Choice3Duration", choice3Duration);
    player.SetVar("PositiveFeedbacktoUserDuration", positiveFeedbackDuration);
    player.SetVar("PositiveFeedbackUsDuration", positiveFeedbackUsDuration);
    player.SetVar("PositiveFeedbackToBothDuration", positiveFeedbackToBothDuration);
}
