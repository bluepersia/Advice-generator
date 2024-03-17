import styles from './AdviceGenerator.module.css';
import imgDice from '../images/icon-dice.svg';

export default function AdviceGenerator(): JSX.Element {
  return (
    <div className={styles.generator}>
      <p className={styles.numAdvice}>Advice #117</p>
      <p className={styles.body}>
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action"
      </p>
      <div className={styles.splitter}>
        <div className={styles.lineHorizontal}></div>
        <div className={styles.linesVertical}>
          <div className={styles.lineVertical}></div>
          <div className={styles.lineVertical}></div>
        </div>
        <div className={styles.lineHorizontal}></div>
      </div>

      <div className={styles.imgDiceWrapper}>
        <img src={imgDice} className={styles.imgDice} />
      </div>
    </div>
  );
}
