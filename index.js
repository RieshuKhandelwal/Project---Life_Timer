const settingsGearEl = document.getElementById("gearIcon");
const settingsContentEl = document.getElementById("settingsContent");

let isOpen = true;

settingsGearEl.addEventListener('click',() => {
    if(isOpen === true){
        isOpen = false;
        settingsContentEl.style.display = "none";       
    }else{
        isOpen = true;
        settingsContentEl.style.display = "inherit";
    }
});

// Add a button to clear the DOB
const clearDobEl = document.getElementById("clearDobButton");

clearDobEl.addEventListener('click', () => {
    // Remove the DOB from localStorage
    localStorage.removeItem('DOB');

    // Reload the page
    location.reload();
});


const firstPage = document.getElementById("1stpage");
const secondPage = document.getElementById("2ndpage");

const dobEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

let yearsEl = document.getElementById("years");
let monthsEl = document.getElementById("months");
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

//making a function to get the time in double digit

let twoDigitNumber = (number) => {
    return number > 9? number : `0${number}`;
}


secondPage.classList.add("hide");
// Check if DOB is stored in localStorage
let DOB = localStorage.getItem('DOB');

if (DOB) {
    // DOB is stored, so we can immediately start updating the age
    setInterval(() => updateAge(), 1000);
    firstPage.classList.add("hide");
    secondPage.classList.remove("hide");
} else {

        dobEl.addEventListener('click',() => {
        DOB = dobInputEl.value;
    
        if(DOB){
        // Store the DOB in localStorage to restore when reloading
            localStorage.setItem('DOB', DOB);
            setInterval(() => updateAge(), 1000);
            firstPage.classList.add("hide");
            secondPage.classList.remove("hide");
        }else{
            secondPage.classList.add("hide");
            firstPage.classList.remove("hide");
        }
    });
}   

const updateAge = () => {
    let currentDate = new Date();
    let dateDiff = currentDate - (new Date(DOB));
    
    // Calculate the number of years
    let years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    dateDiff -= years * (1000 * 60 * 60 * 24 * 365);
    
    // Calculate the remaining months
    let months = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30));
    dateDiff -= months * (1000 * 60 * 60 * 24 * 30);
    
    // Calculate the remaining days
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    dateDiff -= days * (1000 * 60 * 60 * 24);

    // Calculate the remaining hours
    let hours = Math.floor(dateDiff / (1000 * 60 * 60));
    dateDiff -= hours * (1000 * 60 * 60);

    // Calculate the remaining minutes
    let minutes = Math.floor(dateDiff / (1000 * 60));
    dateDiff -= minutes * (1000 * 60);

    // Calculate the remaining seconds
    let seconds = Math.floor(dateDiff / 1000);
    
    yearsEl.innerHTML = twoDigitNumber(years);
    monthsEl.innerHTML = twoDigitNumber(months);
    daysEl.innerHTML = twoDigitNumber(days);
    hoursEl.innerHTML = twoDigitNumber(hours);
    minutesEl.innerHTML = twoDigitNumber(minutes);
    secondsEl.innerHTML = twoDigitNumber(seconds);
}


