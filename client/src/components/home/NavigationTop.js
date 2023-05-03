import React, {useEffect, useState} from 'react';
import NavigationExt from "./NavigationExt";

const NavigationTop = () => {
    const [details, setDetails] = useState({
        start: {env: "Forêt"},
        last: {env: "Montagne"},
        scroll: {start: 2, end: 4}
    })

    const getDetails = () => {
        const width = window.innerWidth
        const height = window.document.documentElement.clientHeight

        switch (true) {
            case (width >= 768 && width < height):
                setDetails(prev => ({start: {...prev.start, class: 1.51}, last: {...prev.last, class: 1.84}, scroll: {start: 1.35, end: 2.65}}))
                break
            case (width >= 480):
                setDetails(prev => ({start: {...prev.start, class: 1.14}, last: {...prev.last, class: 1.65}, scroll: {start: .9, end: 2.9}}))
                break
            default:
                setDetails(prev => ({start: {...prev.start, class: 1.55}, last: {...prev.last, class: 1.85}, scroll: {start: 1.4, end: 2.6}}))
                break
        }
    }

    useEffect(() => {
        getDetails()
    },[])

    return (
        <NavigationExt
            details={details}
            translate={[-100, 0]}
            className='ntp-container-first'
        />
    )
}

export default NavigationTop
