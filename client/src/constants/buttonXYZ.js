//import assets
import Exit from '../assets/icons/exit.png'
import Play from '../assets/icons/play.png'

const forestButtons = {
    enter: {
        position: [-96, -18.5, 88],
        rotation: [0, 5, 0],
        scale: "1",
        image: Play
    },
    museum: {
        position: [-94, -18.5, 88],
        rotation: [0, -5, 0],
        scale: "1",
        image: Exit
    }
}

const mountainButtons = {
    enter: {
        position: [-0.283, .95, 0.280],
        rotation: [0, 5, 0],
        scale: ".005",
        image: Play
    },
    museum: {
        position: [-0.274, .95, 0.280],
        rotation: [0, -5, 0],
        scale: ".005",
        image: Exit
    }
}

const desertButtons = {
    enter: {
        position: [-1, 0, 1.28],
        rotation: [0, 5, 0],
        scale: ".05",
        image: Play
    },
    museum: {
        position: [-.90, 0, 1.28],
        rotation: [0, -5, 0],
        scale: ".05",
        image: Exit
    }
}

const lakeButtons = {
    enter: {
        position: [-5.365, 1, 8.97],
        rotation: [0, 5, 0],
        scale: ".05",
        image: Play
    },
    museum: {
        position: [-5.265, 1, 8.97],
        rotation: [0, -5, 0],
        scale: ".05",
        image: Exit
    }
}

export const buttonXYZ = {
    forest: forestButtons,
    mountain: mountainButtons,
    desert: desertButtons,
    lake: lakeButtons
}
