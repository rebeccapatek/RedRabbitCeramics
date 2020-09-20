import { useCeramics } from './CeramicsDataProvider.js'
import { Ceramics } from './Ceramics.js'

export const CeramicsList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("#container")
    const ceramics = useCeramics()
    let potteryHTMLRepresentations = ""
    for (const pot of Ceramics) {

    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="ceramicsList">
            ${potteryHTMLRepresentations}
        </article>
    `
}