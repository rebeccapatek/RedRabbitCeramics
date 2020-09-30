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