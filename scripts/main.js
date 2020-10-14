import { useCeramics } from './CeramicsDataProvider.js'
import { CeramicsList } from './CeramicsList.js'
import { CeramicsSorter } from './CeramicsSorter.js'

const allTheCeramics = useCeramics()



CeramicsList();
CeramicsSorter();


