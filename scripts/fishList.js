import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = "";

    for (const fish of database.fish) {
        fishHTML += `
        <article class="Fish List">
                <img src="${fish.image}" alt="${fish.species} image" class="fish-item__image">
                <div class="fish-item__details">
                    <h2 class="movie__title">${fish.species}</h2>
                    <p class="fish-item__diet"><strong>Diet:</strong> ${fish.diet}</p>
                    <p class="fish-item__location"><strong>Location:</strong> ${fish.location}</p>
                </div>
            </article>
        
        `;
    }
    // Generate an HTML representation of each fish
   return fishHTML
    
};

console.log(database)