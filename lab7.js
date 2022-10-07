const testTwo = document.querySelector("#div2");
const fortuneButton = document.querySelector("#fortune");
const dogAgeButton = document.querySelector("#dogAge");
let output;
let error = false;

const nullOrEmptyString = (inputVariable) => {
  if (inputVariable === null) {
    return 0;
  } else {
    return inputVariable.trim();
  }
};
const fortuneTeller = (jobTitle, loc, partnerName, numChild) => {
  if (nullOrEmptyString(jobTitle) && nullOrEmptyString(loc)) {
    if (nullOrEmptyString(partnerName) && nullOrEmptyString(numChild)) {
      console.log(
        `You will be a ${jobTitle} in ${loc}, and married to ${partnerName} with ${numChild} kids.`
      );
      output = `You will be a ${jobTitle} in ${loc}, and married to ${partnerName} with ${numChild} kids.`;
    } else if (nullOrEmptyString(partnerName)) {
      console.log(
        `You will be a ${jobTitle} in ${loc}, and married to ${partnerName} with no kids.`
      );
      output = `You will be a ${jobTitle} in ${loc}, and married to ${partnerName} with no kids.`;
    } else {
      console.log(
        `You will be a ${jobTitle} in ${loc} and not married to anyone.`
      );
      output = `You will be a ${jobTitle} in ${loc} and not married to anyone.`;
    }
  } else {
    console.log("test");
    error = true;
  }

  if (!error) {
    testTwo.innerHTML = `<p>${output}</p>`;
  } else {
    let errorDiv = document.createElement("div");
    let errorParagraph = document.createElement("p");
    let cover = document.createElement("div");

    errorParagraph.textContent = `Error, you must enter at both a "Job Title" and "Where you're located". Please reset and try again!`;
    errorDiv.appendChild(errorParagraph);
    errorDiv.className = "error";
    cover.className = "cover";
    document.querySelector("body").appendChild(errorDiv);
    document.querySelector("body").appendChild(cover);
    document.querySelector(".cover").addEventListener("click", () => {
      location.reload();
    });
  }
};

let jobTitle = prompt("What is your Job Title: ");
let userLocation = prompt("Where are you located: ");
let partnerName = prompt(`What is your Partner's name: `);
let numChild = prompt("How many children do you have: ");

fortuneButton.addEventListener("click", () =>
  fortuneTeller(jobTitle, userLocation, partnerName, numChild)
);
