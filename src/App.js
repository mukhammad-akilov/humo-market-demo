import './normolize.css';
import './App.css';
import Snowfall from "react-snowfall";
import {useState, useEffect} from "react";
import styles from "./App.module.css"
import introMusic from "./assets/intro.mp3";
import ConfirmAudioModal from "./components/ConfirmAutdioModal/ConfirmAudioModal";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";

const  App = () => {
   const [date, setDate] = useState("");
   const [acceptAudio, setAcceptAudio] = useState(false);

    useEffect(() => {
        // Handle audio play problem in Apple browser
        const unlockAudio = () => {
            const sound = new Audio("data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");

            sound.play();
            sound.pause();
            sound.currentTime = 0;

            document.body.removeEventListener('click', unlockAudio)
            document.body.removeEventListener('touchstart', unlockAudio)
        }

        document.body.addEventListener('click', unlockAudio);
        document.body.addEventListener('touchstart', unlockAudio);
    }, []);

   useEffect(() => {
       if(acceptAudio) {
           // const audioStream = new Audio(introMusic);
           // audioStream.loop = true;
           // audioStream.play();
           const audioStream = new Audio(introMusic);
           audioStream.loop = true;
           const promiseAudioStream = audioStream.play();

           if (promiseAudioStream !== undefined) {
               promiseAudioStream.then(() => {}).catch(error => console.error);
           }
       }
   }, [acceptAudio]);

   return (
        <main className={styles.main}>
            <h1 className={styles.title}>Хумо Маркет Demo Day</h1>
            <div className={styles.counterAnimationContainer}>
                <div className={styles.countdownContainer}>
                    <h3 className={styles.title}>До начала демо осталось:</h3>
                    <CountDownTimer />
                </div>
                <div className={styles.animationContainer}>
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_yr6zz3wv.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
                </div>
            </div>
          <Snowfall />
          <ConfirmAudioModal open={!acceptAudio} onClose={() => setAcceptAudio(true)}/>
        </main>
   );
}

export default App;
