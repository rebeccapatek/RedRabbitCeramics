import { useCeramics } from './CeramicsDataProvider.js'
import { CeramicsList } from './CeramicsList.js'

const allTheCeramics = useCeramics()

for (const ceramics of allTheCeramics) {
    console.log(ceramics)
}
console.log("Welcome to the main module")
CeramicsList();


