import {Howl, Howler} from 'howler';

//import actions
import {soundActions} from '../actions/soundActions';

const sounds = {
    forest: 'https://lasonotheque.org/UPLOAD/mp3/2715.mp3'
}

function play (dispatch, env) {
    const sound = new Howl({
        id: env,
        src: sounds[env],
        loop: true,
        volume: 1,
        html5: true
    })

    const onPlay = () => {
        const soundId = sound.play()
        document.removeEventListener('click', onPlay)
        soundActions.set(dispatch, soundId)
    }

    document.addEventListener('click', onPlay)
}

function stop (dispatch, soundId) {
    if (soundId !== null) {
        Howler.stop(soundId)
        soundActions.raz(dispatch)
    }
}

export const sound = {
    play: play,
    stop: stop
}
