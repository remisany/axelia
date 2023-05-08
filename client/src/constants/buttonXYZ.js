//import assets
import Exit from '../assets/icons/exit.png'
import Play from '../assets/icons/play.png'

const forestButtons = {
    enter: {
        position: [-96, -18.5, 88],
        rotation: [0, 5, 0],
        image: Play
    },
    museum: {
        position: [-94, -18.5, 88],
        rotation: [0, -5, 0],
        image: Exit
    }
}

export const buttonXYZ = {
    forest: forestButtons
}
