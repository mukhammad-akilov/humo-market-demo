import {useState, useEffect} from "react";
import {differenceInSeconds} from "date-fns";
import styles from "./CoundDown.module.css";

const demoDayDate= new Date(2022, 6, 15, 15, 18, 0);

const CountDownTimer = ({open, ...props}) => {
    const [secondsDiffer, setSecondsDiffer] = useState("");
    const [filteredDate, setFilteredDate] = useState(null);

    useEffect(() => {
        setFilteredDate({
           days: Math.floor(secondsDiffer / (3600*24)),
           hours: Math.floor(secondsDiffer % (3600*24) / 3600),
           minutes: Math.floor(secondsDiffer % 3600 / 60),
           seconds: Math.floor(secondsDiffer % 60),
        });
    }, [secondsDiffer]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const result = differenceInSeconds(
                demoDayDate,
                new Date()
            );
            setSecondsDiffer(result);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    });

    return (
        <>
            {filteredDate &&
                <div className={styles.countDownContainer}>
                    <div className={styles.countDownItem}>
                        <span className={styles.countDownItemValue}>{filteredDate.days}</span>
                        <span className={styles.countDownItemDescription}>Дней</span>
                    </div>
                    <div className={styles.countDownItem}>
                        <span className={styles.countDownItemValue}>{filteredDate.hours}</span>
                        <span className={styles.countDownItemDescription}>Часов</span>
                    </div>
                    <div className={styles.countDownItem}>
                        <span className={styles.countDownItemValue}>{filteredDate.minutes}</span>
                        <span className={styles.countDownItemDescription}>Минут</span>
                    </div>
                    <div className={styles.countDownItem}>
                        <span className={styles.countDownItemValue}>{filteredDate.seconds}</span>
                        <span className={styles.countDownItemDescription}>Секунд</span>
                    </div>
                </div>
            }
        </>

    );
}

export default CountDownTimer;