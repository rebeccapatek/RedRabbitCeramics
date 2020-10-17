import { useCeramics } from './CeramicsDataProvider.js'
import { CeramicsComponent } from './Ceramics.js'
const eventHub = document.querySelector(".container")
let type = null;


export const CeramicsList = () => {
    eventHub.addEventListener("ceramicTypeChosen", changeEvent => {
        // Use the property you added to the event detail.
        if (changeEvent.detail.ceramicTypeThatWasChosen !== "0") {
            type = changeEvent.detail.ceramicTypeThatWasChosen
            /*
                Filter the criminals application state down to the people that committed the crime
            */
            const appStateCeramics = useCeramics()
            const matchingCeramic = appStateCeramics.filter(pot => pot.type === type)
            console.log("Event Hub was heard");
            let matchingPotteryHTMLRepresentations = ""
            for (const pot of matchingCeramic) {
                const filterPotteryHTML = CeramicsComponent(pot)
                matchingPotteryHTMLRepresentations += matchingPotteryHTMLRepresentations

            }
            contentElement.innerHTML += `
               <article class="ceramicsList">
                    ${matchingPotteryHTMLRepresentations}
                    ${matchingCeramic
                    .map(currentpottery => {
                        return CeramicsComponent(currentpottery);
                    })
                    .join("")}
               </article>
           `
        }

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    })

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





// const render = ceramicsCollection => {
//     contentTarget.innerHTML = you_fill_this_in
// }

