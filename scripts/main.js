import { fishList } from './fishList.js'
import { tipList } from './tipList.js';
// import { tipList } from './tipList.js'
// import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()
const tipsHTML = tipList()
// Generate the care tips
// const tipHTML = tipList()

// Generate the location list
// const locationHTML = locationList()

// Render each HTML string to the correct DOM element


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