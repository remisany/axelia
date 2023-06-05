const getMultiple = () => {
    const width = window.innerWidth
    let multiple

    switch (true) {
        case width < 407:
            multiple = 2
            break
        case width >= 407 && width < 480:
            multiple = 2
            break
        case width >= 480 && width < 768 && window.matchMedia("(orientation: landscape)").matches:
            multiple = 1
            break
        case width >= 480 && width < 768 && window.matchMedia("(orientation: portrait)").matches:
            multiple = 2
            break
        case width >= 768 && width < 1024:
            multiple = 1.2
            break
        case width >= 1024 && width < 1200:
            multiple = 1
            break
        default:
            multiple = 1
            break
    }

    return multiple
}

export const screen = {
    getMultiple: getMultiple,
}
