import { useCeramics } from './CeramicsDataProvider.js'
import { CeramicsComponent } from './Ceramics.js'

export const CeramicsList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("#container")
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