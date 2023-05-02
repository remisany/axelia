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
