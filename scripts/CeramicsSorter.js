const eventHub = document.querySelector(".container")
const ceramicTypeContainer = document.querySelector(".sorter")

export const CeramicsSorter = () => {
    eventHub.addEventListener('ceramicTypeChosen', changeEvent => {



        if (changeEvent.target.id === "ceramicTypeSelect") {

            console.log("message was sent to Event Hub");
            // Create custom event. Provide an appropriate name.
            const customEvent = new CustomEvent('ceramicTypeChosen', {
                detail: {
                    ceramicTypeThatWasChosen: changeEvent.target.value
                },

            }
            )

            // Dispatch to event hub
            eventHub.dispatchEvent(customEvent)

        }
    });

    const contentElement = document.querySelector(".sorter")

    contentElement.innerHTML += `
    <select id="ceramicTypeSelect">
        <option value="0">Sort By</option>
        <option value="mug">Mugs</option>
        <option value="planter">Planters</option>
        <option value="Coffee-maker">Coffee-Making Accesories</option>
    </select>
    `
    console.log("the sorter was put at the top of the page")



}



