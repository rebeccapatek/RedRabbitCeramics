const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "ceramicTypeSelect") {
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

export const mugsCeramics = cermamicCollectionArray => {
    let mugs = [];
    for (const ceramic of cermamicCollectionArray) {
        if (ceramic.type === "mug") {
            mugs.push(ceramic);
        }
    }
    return mugs;
};
export const plantersCeramics = cermamicCollectionArray => {
    let planters = [];
    for (const ceramic of cermamicCollectionArray) {
        if (ceramic.type === "planter") {
            planters.push(ceramic);
        }
    }
    return planters;
};
export const coffeeCeramics = cermamicCollectionArray => {
    let coffeemakers = [];
    for (const ceramic of cermamicCollectionArray) {
        if (ceramic.type === "Coffee-maker") {
            coffeemakers.push(ceramic);
        }
    }
    return coffeemakers;
};