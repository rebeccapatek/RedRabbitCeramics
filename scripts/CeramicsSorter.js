const eventHub = document.querySelector(".container")

export const CeramicsSorter = () => {
    const contentElement = document.querySelector(".sorter")
    contentElement.innerHTML += `
    <select id="ceramicTypeSelect">
        <option value="0">Sort By</option>
        <option value="mug">Mugs</option>
        <option value="planter">Planters</option>
        <option value="Coffee-maker">Coffee-Making Accesories</option>
    </select>
    `

}

eventHub.addEventListener('ceramicTypeChosen', onchange => {



    if (onchange.target.id === 'ceramicTypeSelect') {

        console.log("message was sent to Event Hub");
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent('ceramicTypeChosen', {
            detail: {
                ceramicTypeThatWasChosen: onchange.target.value
            }
        }
        )

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)

    }
})

