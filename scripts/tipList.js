import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = "";

    for (const tip of database.tips) {
        tipHTML += `
        <li class="tip">
            <p><strong>Topic:</strong> ${tip.topic}</p> <br>
            <p><strong>Tip:</strong> ${tip.text}</p>
        </li>
        `;
    }
    return tipHTML 

};