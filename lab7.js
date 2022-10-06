






const testTwo = document.querySelector("#div2");
const fortuneButton = document.querySelector('#fortune');
const dogAgeButton = document.querySelector('#dogAge');
let output;

const fortuneTeller = (jobTitle, loc, partnerName, numChild) => {
    if (partnerName.trim().length && numChild.trim().length) {
        console.log(`You will be a ${jobTitle} in ${loc}, and married to ${partnerName} with ${numChild} kids.`);
        output = `You will be a ${jobTitle} in ${loc}, and married to ${partnerName} with ${numChild} kids.`
    } else if (partnerName.trim().length) {
        console.log(`You will be a ${jobTitle} in ${loc}, and married to ${partnerName} with no kids.`);
        output = `You will be a ${jobTitle} in ${loc}, and married to ${partnerName} with no kids.`
    } else {
        console.log(`You will be a ${jobTitle} in ${loc} and not married to anyone.`);
        output = `You will be a ${jobTitle} in ${loc} and not married to anyone.`
    }
};


let jobTitle = prompt('What is your Job Title: ');
let userLocation = prompt('Where are you located: ');
let partnerName = prompt(`What is your Partner's name: `);
let numChild = prompt('How many children do you have: ');


fortuneButton.addEventListener('click', fortuneTeller(jobTitle, userLocation, partnerName, numChild));



testTwo.innerHTML = `<p>${output}</p>`



