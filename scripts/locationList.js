import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = "";

    for (const location of database.locations) {
        locationHTML += `
         <li class="tip">
            <article>
                <h3>${location.name}</h3>
                <p><strong>Country:</strong> ${location.country}</p>
                <p><strong>Description:</strong> ${location.description}</p>
            </article>
        </li>
        `;
    }
    return locationHTML 

};