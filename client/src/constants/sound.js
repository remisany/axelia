import {Howl, Howler} from 'howler';

//import actions
import {soundActions} from '../actions/soundActions';

const sounds = {
    forest: 'https://lasonotheque.org/UPLOAD/mp3/2715.mp3',
    mountain: 'https://lasonotheque.org/UPLOAD/mp3/0595.mp3',
    desert: 'https://lasonotheque.org/UPLOAD/mp3/0699.mp3',
    lake: 'https://lasonotheque.org/UPLOAD/mp3/2713.mp3'
}

function play (dispatch, env) {
    const sound = new Howl({
        id: env,
        src: sounds[env],
        loop: true,
        volume: 1,
        html5: true
    })

    if(!Howler._howls[0].playing()) {
        const soundId = sound.play()
        soundActions.set(dispatch, soundId)
    }
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
