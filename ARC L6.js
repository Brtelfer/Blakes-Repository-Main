function setTexts(slidenumber) {
    console.log("setTexts function called with slideNumber: " + slidenumber); // Log the function call

    if (slidenumber === undefined || slidenumber === null) {
        console.error("Slide number is undefined or null.");
        return;
    }

    var correctTexts = [
        "This is a credit card statement with the amount of money that student owes.",
        "This document is intended to give a record of purchases and payments. It gives the card holder a summary of how much the card has been used during the billing period, as well as the amount that is due for that billing cycle.",
        "student should refer to the section titled account information. Here we can find the payment due date. This shows student will need to pay his bill by November 23rd.",
        "The credit available line shows the amount student currently has available on his credit card to spend on his card. His credit available is one ninety five dollars and eight cents. And that's the maximum amount he can spend on this card right now.",
        "student's largest purchase was at Grocery World on October 20th. We can find this information by comparing the amounts of the other purchases in this section. He spent a total of fifty dollars and thirty two cents on that date.",
        "We can refer to finance charge summary to locate student's interest rate. If we look at the other sections, there is no other place that outlines interest rates for cash advances.",
        "If we look at the same finance charge summary as in the previous question, and find the annual percentage rate on the second column, we find that the interest student will actually pay is 11.28 percent.",
        "If you refer back to payment information or the balance summary, you will find that student will need to pay a minimum amount of eighteen dollars. This is listed next to minimum amount due.",
        "The purpose of this document is to provide a summary of skills, abilities, and accomplishments.",
        "While student can certainly apply for any of these positions, his resume best reflects his experience as a sever. The best choice here is fine dining server.",
        "student's goals are best reflected in the Objective section of the resume. The purpose here is to tell a potential employer what it is you want to do.",
        "student dot smith 03 at cnet dot com is the best email to use. It is best to avoid email addresses with your nickname, hobby, pet's name or any other personal information besides your name.",
        "Any skill should be in the core qualification section, even if they are not directly relevant to the job student will apply for, just in case they end up being important.",
        "the best answer is exceptional video gaming abilities. Though student does have these skills, they are not the same type of skills as the restaurant and customer service oriented ones in this section. The other skills listed are much more relevant to a serving job.",
        "It is acceptable to list hobbies if they are relevant to the job you're applying for. And contact information is necessary for potential employers to get in touch with you. But religious affiliations is rather personal, it's best to leave that one out if it's not directly relevant.",
        "This document intends to show who is a part of the contract and what it is for. In this case, it is for a rental agreement.",
        "student and Nicholas are renting this property for one year. We can find this information in the first paragraph of the document. Their arrangement will begin in November 2019 and end in November 2019.",
        "Oscar Miller is the owner of the house and in turn this makes him the landlord. The first sentence of this document outlines the roles of all the persons involved in this agreement.",
        "They have to pay a security deposit of six hundred and fifty dollars plus the first month's rent of six hundred and fifty dollars, which totals to thirteen hundred dollars. If we refer to section two labeled payments, we can find this information.",
        "As stated under section three on late charge, Mr. Miller will handle a bad check as unpaid rent. And he would charge student with additional twenty five dollars fee for the bad check.",
        "According to the section on late charges, failing to pay by the time stated would result in a late fee of thirty two dollars and fifty cents, which will be added to rent.",
        "According to the section labeled occupants, student and Nicholas can have more than two people living with them but only if it does not exceed 15 days.",
        "In section nine on property maintenance, it states that the landlord will provide paid maintenance and repair. In section four, utilities, it states that the tenants are responsible for paying the utilities and for the trash pickup.",
        "In section six on pets, student will be able to keep his pet fish if he obtain a written consent from the Mr. Miller the owner. And he would also need to pay an additional two hundred and fifty dollars deposit. And an extra twenty five dollars will also be added to his rent each month."
    ];

    var incorrectPromptTexts = [
        "Here's a hint, there are dollar amounts on there and itemized activity, what type of document best fit these?",
        "Think about why you would need a statement for bills, please try again.",
        "Be careful, student is asking for a specific date when his payment would be due, please try again.",
        "Remember, we are looking for the amount student still has that he can spend. Please try again.",
        "Please try to compare the different amounts and choose the largest one. Try again.",
        "Here's a hint, interest rates are in percentages, please try again.",
        "student needs to know the annual rate he would need to pay, look carefully and try again.",
        "Be careful to look for the minimum amount due for student. Please try again.",
        "Here's a hint, you want to effectively communicate what makes you best for the job. Unless your hobbies are related to the job, a resume should not describe your hobbies. Please try again.",
        "Please read carefully under student's experience section. Try again.",
        "Here's a clue, we are looking for where student lists what he wants to do. Please try again.",
        "A good rule of thumb is not to use your nickname or hobby in the address. Why don't you give it another try?",
        "Here's a hint: which section lists student's skills?",
        "A good thing to consider for this question is what do the other skills have in common. How will they relate to his objective? Let's give it one more try. Which does not fit?",
        "Here's a hint, which one of these is considered more personal or private than the others? Please try again.",
        "Look for keywords in the document for its purpose, please try again.",
        "Here's a hint, look under terms and try to find the date and deduce the length of rent from there. Please try again.",
        "Try searching for the keyword of land lord and find the name from there. Please try again.",
        "Here's a hint, try look for the section that talks about payments. It should explain the amounts. Please try again.",
        "Here's a hint, look for the section on any additional charges that student could potentially run into. Please try again.",
        "Please try to look at the section on late charges, read it carefully and please try again.",
        "Here's a hint, take a look at the section labeled occupants. Please try again.",
        "Look at the section on utilities, read it carefully and try again.",
        "Look at the section on pet ownership. Read it carefully and please try again."
    ];

    var studentUnderstandTexts = [
        "Got it! I always get these confused with my car insurance for some reason.",
        "Yes now that I think about it, having an itemized record is very helpful, even if it's quite annoying to always get these in the mail.",
        "Got it. For some reason I always thought the due date should be under payment information, but I guess now I know the correct place to look for due dates, thanks again.",
        "I always confuse this with the other two, but now I think I get it. New purchases are what I have spent so far, and credit line is what I can spend total. The amount I have left to spend would be credit line subtracting new purchases which would be one ninety five and eight cents, got it.",
        "yeah I think I may have over spent a little on that day. Thanks I needed to check that.",
        "Yes it is a bummer that it doesn't specifically say interest rate on there, just rate so it's confusing. But I will remember that rates would be in percentages and look for that section.",
        "Wow my percentage rate seems higher than I previously thought. Good thing that I checked!",
        "Oh I just found out that although I won't be charged if I just pay that eighteen dollars, my interest would go up if I don't pay the full amount. These credit cards companies are tricky! You would end up owing them quite a lot of money if you are not careful! Thanks for helping me out again.",
        "I'm cleared up on what the purpose of a resume is now. So it's not to get a date. I guess i can use the Internet for that. Thanks.",
        "Great! I was thinking maybe a fine dining server best suits my experience too!",
        "I will remember that objective is where I need to summarize my goals. Thanks.",
        "Yeah, I think having my name in the email address makes perfect sense.",
        "I see. So skills should be in the core qualification section, and work experience that's directly related to the job I'm applying for will be in the experience section, got it!",
        "I'm actually quite proud of my video game talent, but yeah maybe I should just leave it out. I will think about it.",
        "Yes I'm not really that shy about my religious affiliations, but I can see why it's probably best to leave that one out.",
        "Ah, so a rental agreement will lay out every contracted agreement between the landlord and the renter, this would be very informative.",
        "Ah I see now, we are renting per month for 12 months, that's one year. I will keep that in mind.",
        "Okay, Oscar Miller, I wrote that in my notebook.",
        "Wow that's a lot. I hope I get that deposit back eventually, because I may be short on money for this.",
        "That's harsh, I will be sure to check my bank balance that I have enough money for the check.",
        "Geez, I will have to talk to my buddy Nick about getting that payment in on time.",
        "That might work but I will have to talk to that third person about moving in temporarily and just pay his share of the rent for fifteen days. Thanks for letting me know.",
        "I see, what a bummer. But at least the landlord is willing to pay for repairs. That would really be unfortunate if we had to pay for that too!",
        "Look at the section on pet ownership. Read it carefully and please try again."
    ];

    var questionPromptTexts = [
        "What kind of document is this?",
        "What is the purpose of a credit card statement?",
        "Where does it show when Student's payment is due?",
        "How much can Student currently spend on his credit card?",
        "Which of these dates shows the purchase Student spent the most on this month?",
        "Where can Student locate his interest rate for cash advances?",
        "How much interest will Student pay on a cash advance annually?",
        "What is the minimum amount will Student need to pay on this bill?",
        "Which of the following best states the purpose of a resume?",
        "Which job position best fits Student's work experience?",
        "Click on the option that best reflects Student's goals.",
        "Which email will be the easiest for people to remember and also look professional?",
        "In which of the options would Student most likely include his exposure to graphic design?",
        "Which of button options for the Core Qualifications section does not fit with Student's other skills?",
        "Which of these items should not be included on a resume?",
        "What is the purpose of this document?",
        "How long are Student and Nicholas renting this house?",
        "Click on the name of the landlord of the house.",
        "Why do Student and Nicholas pay a total of $1300 to their owner on the first month and not $650?",
        "How will the landlord treat a bad check?",
        "What happens if Student or Nicholas fails to pay rent by the 5th day of the month?",
        "Can there be more than two people living in the house at any time?",
        "What services does the landlord provide for the tenants?",
        "Will Student be able to keep his pet fish?"
    ];

    var Choice1Texts = [
        "Receipt",
        "To give a record of purchases and payments",
        "Account Information",
        "$124.92",
        "10/3/2014",
        "Account Activity",
        "22.25%",
        "$124.92",
        "To provide a summary of skills, abilities and accomplishments to get a job",
        "Restaurant Manager",
        "Objective",
        "student.smith03@cnet.com",
        "Objective",
        "Excellent communication skills",
        "Religious Affiliations",
        "To give record of payments",
        "6 months",
        "Oscar Miller",
        "They have too much money and want to share it.",
        "Paid Rent",
        "Nothing",
        "No, it violates the rental contract",
        "Paid Utilities",
        "No, Mr. Miller doesn't allow animals under any circumstances"
    ];

    var Choice2Texts = [
        "Credit Card Statement",
        "To collect for insurance and loans",
        "Payment Information",
        "$320.00",
        "10/20/2014",
        "Balance Summary",
        "0.94%",
        "$18.00",
        "To provide a summary of skills, hobbies, and abilities to get a job",
        "Fine Dining Server",
        "Core Qualifications",
        "cooljsmith@cnet.com",
        "Core Qualifications",
        "Customer service-oriented",
        "Contact Information",
        "To give a receipt and record of purchases",
        "1 year",
        "Student",
        "They have to pay a security deposit of $650 and first month rent of $650",
        "Unpaid rent with an additional $25 fee",
        "A fee of 5% equivalent to $32.50 will be added to rent",
        "Yes, if it is for less than 15 days",
        "Paid Trash pickup",
        "Yes, with consent and additional deposit and rental fees"
    ];

    var Choice3Texts = [
        "Car Insurance Bill",
        "To show who is a part of a contract",
        "Account Activity",
        "$195.08",
        "10/23/2014",
        "Finance Charge Summary",
        "11.28%",
        "$195.08",
        "To provide a summary of hobbies and accomplishments to get a date",
        "Restaurant Host",
        "Experience",
        "His current email is acceptable",
        "Experience",
        "Exceptional sketching and drawing abilities",
        "Related Hobbies",
        "To show who is a part of the contract and what the contract entails",
        "2 years",
        "Nicholas Michaels",
        "The owner does not trust them so He demanded $650 extra",
        "Unpaid rent only",
        "The owner will give Student and Nicholas a fee of $32.00",
        "Yes, anyone can stay with Student and Nicholas",
        "Paid Maintenance and Repair",
        "Yes, and there is no fee for animals"
    ];

    var positiveFeedbackTexts = [
        "Great job!", "Excellent!", "Well done!"
    ];

    var negativeFeedbackTexts = [
        "Nice Try!", "Not quite.", "Incorrect."
    ];

    var Key = [
        2, 1, 1, 3, 2, 3, 3, 2, 1, 2, 1, 1, 2, 3, 1, 3, 2, 1, 2, 2, 2, 3, 2, 2
    ];

    var quiz1QuestionPromptTexts = [
        "The worker was in charge of the room's __________.",
        "Who is __________ for serving this customer?",
        "The two people signed the __________.",
        "It is not __________ to pay that bill in cash.",
        "You are __________ allowed to use a parking space.",
        "Residents are not allowed to have a cat __________ a dog?",
        "What does 'obtain' mean?",
        "What does 'commence' mean?",
        "What does 'termination' mean?",
        "What does 'deemed' mean?"
    ];

    var quiz1Option1Texts = [
        "cleaner",
        "responsible",
        "agreeable",
        "acceptable",
        "because",
        "if/when",
        "fly",
        "cause",
        "word",
        "judged"
    ];

    var quiz1Option2Texts = [
        "cleanliness",
        "irresponsible",
        "agreement",
        "acceptance",
        "hereby",
        "and/or",
        "get",
        "answer",
        "end",
        "delivered"
    ];

    var quiz1Option3Texts = [
        "unclean",
        "responsibility",
        "disagree",
        "acceptability",
        "overall",
        "after/then",
        "eat",
        "start",
        "sea",
        "escaped"
    ];

    var quiz1Key = [
        2, 1, 3, 1, 2, 2, 3, 3, 2, 1
    ];

    var quiz2Texts = [
        "The person wanted to get a job in restaurant __________.",
        "The worker had experience in graphic design and __________.",
        "Your __________ is the place where you live.",
        "The __________ of the new stove was fast.",
        "_________ the lease will be month-to-month.",
        "__________ you would like to move out, please let me know.",
        "seamless",
        "hospitable",
        "utilities",
        "breach"
    ];

    var quiz2Option1Texts = [
        "management",
        "visualization",
        "residence",
        "installation",
        "Thereafter",
        "If",
        "continue",
        "welcoming",
        "water",
        "violation"
    ];

    var quiz2Option2Texts = [
        "manager",
        "visual",
        "resident",
        "uninstall",
        "Through",
        "Thus",
        "increase",
        "satisfying",
        "children",
        "collector"
    ];

    var quiz2Option3Texts = [
        "unmanage",
        "visualize",
        "residential",
        "installable",
        "Since",
        "In all",
        "mention",
        "relaxing",
        "country",
        "headache"
    ];

    var quiz2Key = [
        2, 3, 3, 3, 1, 1, 2, 3, 2, 1
    ];

    var player = GetPlayer();

    player.GetVar("Correct");
    player.GetVar("NegativeFeedbacktoUser");
    player.GetVar("StudentUnderstand");
    player.GetVar("IncorrectPrompt");
    player.GetVar("PositiveFeedbacktoUser");
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
    var correctText = correctTexts[slidenumber - 1];
    if (correctText === undefined || correctText === null) {
        console.error("Correct text is undefined or null for slide number:", slidenumber);
        return;
    }
    console.log("Setting Correct to: " + correctText);
    player.SetVar("Correct", correctText);

    var incorrectPromptText = incorrectPromptTexts[slidenumber - 1];
    console.log("Setting IncorrectPrompt to: " + incorrectPromptText);
    player.SetVar("IncorrectPrompt", incorrectPromptText);

    var studentUnderstandText = studentUnderstandTexts[slidenumber - 1];
    console.log("Setting StudentUnderstand to: " + studentUnderstandText);
    player.SetVar("StudentUnderstand", studentUnderstandText);

    // Randomly select positive and negative feedback
    var randomPositiveFeedback = positiveFeedbackTexts[Math.floor(Math.random() * positiveFeedbackTexts.length)];
    var randomNegativeFeedback = negativeFeedbackTexts[Math.floor(Math.random() * negativeFeedbackTexts.length)];

    console.log("Setting PositiveFeedbacktoUser to: " + randomPositiveFeedback);
    player.SetVar("PositiveFeedbacktoUser", randomPositiveFeedback);

    console.log("Setting NegativeFeedbacktoUser to: " + randomNegativeFeedback);
    player.SetVar("NegativeFeedbacktoUser", randomNegativeFeedback);

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
    if (slidenumber <= 10) {
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

    if (slidenumber <= 10) {
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
    var correctDuration = calculateDuration(correctText);
    var incorrectPromptDuration = calculateDuration(incorrectPromptText);
    var studentUnderstandDuration = calculateDuration(studentUnderstandText);
    var questionPromptDuration = calculateDuration(questionPrompt);
    var choice1Duration = calculateDuration(choice1);
    var choice2Duration = calculateDuration(choice2);
    var choice3Duration = calculateDuration(choice3);

    // Calculate durations for positive and negative feedback
    var positiveFeedbackDuration = calculateDuration(randomPositiveFeedback);
    var negativeFeedbackDuration = calculateDuration(randomNegativeFeedback);

    // Log the calculated durations
    console.log("Correct Duration: " + correctDuration + " seconds");
    console.log("IncorrectPrompt Duration: " + incorrectPromptDuration + " seconds");
    console.log("StudentUnderstand Duration: " + studentUnderstandDuration + " seconds");
    console.log("QuestionPrompt Duration: " + questionPromptDuration + " seconds");
    console.log("Choice1 Duration: " + choice1Duration + " seconds");
    console.log("Choice2 Duration: " + choice2Duration + " seconds");
    console.log("Choice3 Duration: " + choice3Duration + " seconds");
    console.log("PositiveFeedbacktoUser Duration: " + positiveFeedbackDuration + " seconds");
    console.log("NegativeFeedbacktoUser Duration: " + negativeFeedbackDuration + " seconds");

    // Store the calculated durations in Storyline variables
    player.SetVar("CorrectDuration", correctDuration);
    player.SetVar("IncorrectPromptDuration", incorrectPromptDuration);
    player.SetVar("StudentUnderstandDuration", studentUnderstandDuration);
    player.SetVar("QuestionPromptDuration", questionPromptDuration);
    player.SetVar("Choice1Duration", choice1Duration);
    player.SetVar("Choice2Duration", choice2Duration);
    player.SetVar("Choice3Duration", choice3Duration);
    player.SetVar("PositiveFeedbacktoUserDuration", positiveFeedbackDuration);
    player.SetVar("NegativeFeedbacktoUserDuration", negativeFeedbackDuration);
}
