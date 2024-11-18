import { database } from './aquariumData.js';




export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = [];

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
           holyFish.push(fish.name);
        }
    }
    

    return holyFish.join(', ')
}



export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish

    const soldierFishHTML = [];

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldierFishHTML.push(fish.name);
        }
    }

    return soldierFishHTML.join(', ')
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
}

