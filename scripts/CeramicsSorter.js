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

eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "ceramicTypeSelect") {
        console.log("message was sent")
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("ceramicTypeChosen", {
            detail: {
                ceramicTypeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

