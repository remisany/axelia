import React from 'react';
import NavigationExt from "./NavigationExt";

const NavigationTop = () => {
    return (
        <NavigationExt
            details={{
                start: {
                    env: "Forêt",
                    class: 1.24
                },
                last: {
                    env: "Montagne",
                    class: 1.69
                },
                scroll: {
                    start: 1.02,
                    end: 2.8
                }
            }}
            translate={[-100, 0]}
        />
    )
}

export default NavigationTop

/*

    let first = true

    const getScale = () => {
        const width = window.innerWidth
        const height = window.document.documentElement.clientHeight

        switch (true) {
            case (width >= 1200):
                break
            case (width >= 1024):
                break
            case (width >= 768 && width < height):
                break
            case (width >= 768 && width > height):
                break
            case (width >= 480):
                break
            default:
                break
        }
    }

    const handleResize = () => {
        if (first) {
            first = false
        } else {
            window.scrollTo(0, 0);
            window.location.reload()
        }
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(handleResize)
        resizeObserver.observe(document.body)

        getScale()
    },[])

 */
