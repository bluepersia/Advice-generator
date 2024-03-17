import styles from './AdviceGenerator.module.css';
import imgDice from '../images/icon-dice.svg';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

type Slip = {
  id: number;
  advice: string;
};
export default function AdviceGenerator(): JSX.Element {
  const queryClient = useQueryClient();
  const {
    data: slip,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['advice'],
    queryFn: fetchAdvice,
    staleTime: 0,
  });

  async function fetchAdvice(): Promise<Slip> {
    const res = await fetch(
      'https://api.adviceslip.com/advice?t=' + Math.random()
    );

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return (await res.json()).slip;
  }
  useEffect(() => {
    console.log(slip);
  }, [slip]);
  return (
    <div className={styles.generator}>
      {slip && <p className={styles.numAdvice}>Advice #{slip.id}</p>}
      {error && <p className={styles.error}>{error.message}</p>}
      {isLoading && <p className={styles.body}>Loading...</p>}
      <p className={styles.body}>{slip && slip.advice}</p>
      <div className={styles.splitter}>
        <div className={styles.lineHorizontal}></div>
        <div className={styles.linesVertical}>
          <div className={styles.lineVertical}></div>
          <div className={styles.lineVertical}></div>
        </div>
        <div className={styles.lineHorizontal}></div>
      </div>

      <div
        onClick={() =>
          queryClient.invalidateQueries({
            queryKey: ['advice'],
          })
        }
        className={styles.imgDiceWrapper}
      >
        <img src={imgDice} className={styles.imgDice} />
      </div>
    </div>
  );
}
