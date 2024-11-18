import { fishList } from './fishList.js'
import { tipList } from './tipList.js';
import { locationList } from './locationList.js'
import { mostHolyFish, soldierFish } from './Multiple Fish.js' 
// import { database } from './aquariumData.js';

const mostHolyFishHTML = mostHolyFish()
const mostsoldierFishHTML = soldierFish()

export const renderSoldierFish = (mostsoldierFishHTML) => {
    const listOfSoldierFish = document.getElementById('fishDisplaySoldier');

    if (listOfSoldierFish) {
        listOfSoldierFish.innerHTML = mostsoldierFishHTML;
    } else {
        console.error('stupid')
    }
};
renderSoldierFish(mostsoldierFishHTML)

export const renderHolyFishHTML = (mostHolyFishHTML) => {
    const listOfHolyFish = document.getElementById("fishDisplay");

    if (listOfHolyFish) {
        listOfHolyFish.innerHTML = mostHolyFishHTML;
    } else {
        console.error('no you stupid')
    }

};
renderHolyFishHTML(mostHolyFishHTML)


const fishHTML = fishList()
const tipsHTML = tipList()
const locationHTML = locationList()



export const renderLocationListToDOM = (locationHTML) => {
    const listOfLocations = document.getElementById("locationList");

    if (listOfLocations) {
        listOfLocations.innerHTML = locationHTML;
    } else {
        console.error('negative boss man')
    }

};
renderLocationListToDOM(locationHTML)


export const renderTipListToDOM = (tipsHTML) => {
    const listOfTips = document.getElementById("tipList");

    if (listOfTips) {
        listOfTips.innerHTML = tipsHTML;
    } else {
        console.error('negative boss man')
    }

};
renderTipListToDOM(tipsHTML)

export const renderFishListToDOM = (fishHTML) => {
    const listOfFish = document.getElementById("fishList");

    if (listOfFish) {
        listOfFish.innerHTML = fishHTML;
    } else {
        console.error('negative ghost rider');
    }

};

renderFishListToDOM(fishHTML);