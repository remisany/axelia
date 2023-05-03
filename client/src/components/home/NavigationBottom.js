import React, {useEffect, useState} from 'react';
import NavigationExt from "./NavigationExt";

const NavigationBottom = () => {
    const [details, setDetails] = useState({
        start: {env: "Lac"},
        last: {env: "Désert"},
        scroll: {start: 2, end: 4}
    })

    const getDetails = () => {
        const width = window.innerWidth
        const height = window.document.documentElement.clientHeight

        switch (true) {
            case (width >= 768 && width < height):
                setDetails(prev => ({start: {...prev.start, class: 2.56}, last: {...prev.last, class: 2.18}, scroll: {start: 1.25, end: 2.75}}))
                break
            case (width >= 480):
                setDetails(prev => ({start: {...prev.start, class: 2.85}, last: {...prev.last, class: 2.34}, scroll: {start: 1.1, end: 3.1}}))
                break
            default:
                setDetails(prev => ({start: {...prev.start, class: 2.55}, last: {...prev.last, class: 2.25}, scroll: {start: 1.5, end: 2.7}}))
                break
        }
    }

    useEffect(() => {
        getDetails()
    },[])

    return (
        <NavigationExt
            details={details}
            className='ntp-container-last'
            translate={[100, 0]}
        />
    )
}

export default NavigationBottom
