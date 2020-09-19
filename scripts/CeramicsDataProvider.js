const ceramicsCollection = [
    {
        title: "Red Rabbit Mug",
        type: "mug",
        price: 25,
        images: ["img1.img", "img2.img", "img3.img"],
        sold: false

    },
    {
        title: "Ant-Eater Mug",
        type: "mug",
        price: 25,
        images: ["img1.img", "img2.img", "img3.img"],
        sold: false

    },
    {
        title: "Elaphant Mug",
        type: "mug",
        price: 25,
        images: ["img1.img", "img2.img", "img3.img"],
        sold: false
    },
    {
        title: "Red Rabbit planter",
        type: "planter",
        price: 30,
        images: ["img1.img", "img2.img", "img3.img"],
        sold: false
    },
    {
        title: "yellow stripe planter",
        type: "planter",
        price: 20,
        images: ["img1.img", "img2.img", "img3.img"],
        sold: false
    },
    {
        title: "Coffee Pourover and carafe",
        type: "Coffee-maker",
        price: 45,
        images: ["img1.img", "img2.img", "img3.img"],
        sold: false
    }
]
export const useCeramics = () => {
    return ceramicsCollection.slice()
}
// This is a function in the data provider whose responsibility is to allow other modules to access the state.

