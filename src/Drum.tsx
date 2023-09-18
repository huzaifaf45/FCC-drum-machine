import { AudioClip } from "./types"

interface drumProps {
    audioClip: AudioClip
}

const Drum = ({ audioClip }: drumProps) => {

    const playSound = (clip: AudioClip) => {
        const audioElement = document.getElementById(audioClip.keyTrigger) as HTMLAudioElement;
        if (audioElement) {
            audioElement.play()
                .catch(console.error)
        }
        document.getElementById('display')!.innerText = clip.description
    }

    return (
        <button
            className="drum-pad"
            id={`drum-${audioClip.keyTrigger}`}
            onClick={() => playSound(audioClip)}
        >
            <audio
                src={audioClip.url}
                id={audioClip.keyTrigger}
                key={audioClip.keyTrigger}
                className="clip"
            />
            {audioClip.keyTrigger}
        </button>
    )
}

export default Drum