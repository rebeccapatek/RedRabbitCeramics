import { useCeramics } from './CeramicsDataProvider.js'
import { CeramicsComponent } from './Ceramics.js'
const eventHub = document.querySelector(".container")
let type = null;


// eventHub.addEventListener("ceramicTypeChosen", event => {
//     // Use the property you added to the event detail.
//     if (event.detail.ceramicTypeThatWasChosen !== "0") {
//         type = event.detail.ceramicTypeThatWasChosen
//         /*
//             Filter the criminals application state down to the people that committed the crime
//         */
//         const matchingCeramic = appStateCeramics.filter()

//         /*
//             Then invoke render() and pass the filtered collection as
//             an argument
//         */
//     }
// })

// const render = criminalCollection => {
//     contentTarget.innerHTML = you_fill_this_in
// }


export const CeramicsList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".store")
    const pots = useCeramics()
    let potteryHTMLRepresentations = ""
    for (const pot of pots) {
        const potteryHTML = CeramicsComponent(pot)
        potteryHTMLRepresentations += potteryHTMLRepresentations

    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="ceramicsList">
             ${potteryHTMLRepresentations}
             ${pots
            .map(currentpottery => {
                return CeramicsComponent(currentpottery);
            })
            .join("")}
        </article>
    `
}