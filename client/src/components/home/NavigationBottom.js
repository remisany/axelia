import React from 'react';
import NavigationExt from "./NavigationExt";

const NavigationBottom = () => {
    return (
        <NavigationExt
            details={{
                start: {
                    env: "Lac",
                    class: 2.65
                },
                last: {
                    env: "Désert",
                    class: 2.19
                },
                scroll: {
                    start: 1.05,
                    end: 2.88
                }
            }}
            className='ntp-container-last'
            translate={[100, 0]}
        />
    )
}

export default NavigationBottom

/*


    const [first, setFirst] = useState(false)
    const [last, setLast] = useState(false)

    const start = document.documentElement.clientHeight

    const setClass = () => {
        const position = window.scrollY

        position > start*2.65 ? setFirst(true) : setFirst(false)
        position > start*2.19 ? setLast(true) : setLast(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', setClass)

        return () => window.removeEventListener('scroll', setClass)
    }, [])

    return (
        <div className='ntp-container ntp-container-last'>
            <Parallax startScroll={start*1.05} endScroll={start*2.88} translateX={[100, 0]} className='ntp-cursor'></Parallax>

            <div className='ntp-content-hide ntp-content-hide-first'></div>
            <div className='ntp-content-hide ntp-content-hide-last'></div>

            <div className='ntp-content'>
                <CSSTransition classNames='ntp-transition' in={first} timeout={200} unmountOnExit>
                    <div className='ntp-dest ntp-dest-first'>
                        <div className='ntp-dest-env'>Lac</div>
                        <div className='ntp-dest-point'></div>
                    </div>
                </CSSTransition>

                <CSSTransition classNames='ntp-transition' in={last} timeout={200} unmountOnExit>
                    <div className='ntp-dest ntp-dest-last'>
                        <div className='ntp-dest-env'>Désert</div>
                        <div className='ntp-dest-point'></div>
                    </div>
                </CSSTransition>
            </div>
        </div>
    )

 */
