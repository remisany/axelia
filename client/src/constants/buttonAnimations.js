function appearance (buttonRef, position) {
    const positionFirstFrom = `${position[0]} ${position[1] + 10 } ${position[2]}`
    const positionFirstTo = `${position[0]} ${position[1] - .2} ${position[2]}`
    const positionSecondTo = `${position[0]} ${position[1]} ${position[2]}`

    buttonRef.current.setAttribute('animation__positionFirst', {
        property: 'position',
        from: positionFirstFrom,
        to: positionFirstTo,
        dir: 'alternate',
        dur: 600,
        easing: 'easeInOutQuad',
    });

    buttonRef.current.setAttribute('animation__positionSecond', {
        property: 'position',
        from: positionFirstTo,
        to: positionSecondTo,
        dir: 'alternate',
        dur: 400,
        easing: 'easeInOutQuad',
        delay: 600,
    });
}

function disappearance (buttonRef, position, active) {
    const scaleTo = active ? '1.4 1.4 1.4' : '.6 .6 .6'
    const positionFirstFrom = `${position[0]} ${position[1]} ${position[2]}`
    const positionFirstTo = active ? `${position[0]} ${position[1] - .2} ${position[2]}` : `${position[0]} ${position[1] + .2} ${position[2]}`
    const positionSecondTo = active ?  `${position[0]} ${position[1] + 10} ${position[2]}` : `${position[0]} ${position[1] - 10} ${position[2]}`

    buttonRef.current.setAttribute('animation__scale', {
        property: 'scale',
        from: '1 1 1',
        to: scaleTo,
        dur: 100,
        easing: 'easeInOutQuad',
    });

    buttonRef.current.setAttribute('animation__positionFirst', {
        property: 'position',
        from: positionFirstFrom,
        to: positionFirstTo,
        dir: 'alternate',
        dur: 400,
        easing: 'easeInOutQuad',
    });

    buttonRef.current.setAttribute('animation__positionSecond', {
        property: 'position',
        from: positionFirstTo,
        to: positionSecondTo,
        dir: 'alternate',
        dur: 600,
        easing: 'easeInOutQuad',
        delay: 400,
    });
}

export const buttonAnimations = {
    appearance: appearance,
    disappearance: disappearance
}
