import React from 'react';

//import components
import Camera from "./Camera";

const CameraTranslation = () => {
    return (
        <Camera
            classNameP='cto-page'
            transitionL={{translateX: [100, -100]}}
            transitionR={{translateX: [-100, 100]}}
        />
    )
}

export default CameraTranslation


/*

    const [open, setOpen] = useState(true)
    const [direction, setDirection] = useState(1)

    let directionScroll = 1
    let lastScroll = 0

    const onScroll = () => {
        const reference = window.innerHeight
        const position = window.scrollY

        directionScroll === 1 && position > (6 * reference) && setOpen(false)
        directionScroll === -1 && position < (2 * reference) && setOpen(true)

        if (lastScroll < position) {
            setDirection(1)
            directionScroll = 1
        } else {
            setDirection(-1)
            directionScroll = -1
        }

        lastScroll = position
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        console.log(`DIRECTION ${direction}`)
        console.log(`OPEN ${open}`)
    }, [open, direction])

    return (
        <Camera
            classNameP='cto-page'
            classNameImgL={`${((!open && direction === 1) || (open && direction === -1)) && 'cp-img-translateL'}`}
            classNameImgR={`${((!open && direction === 1) || (open && direction === -1)) && 'cp-img-translateR'}`}
            transitionL={open ? {translateX: [100, -100]} : {translateX: [-100, 100]}}
            transitionR={open ? {translateX: [-100, 100]} : {translateX: [100, -100]}}
        />
    )


 */
