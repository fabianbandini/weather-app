import styles from "./weatherentry.module.scss";
import {toast} from "react-toastify";
import {error} from "next/dist/build/output/log";

export default function WeatherEntry({region}) {
    return (
        <div className={styles.content}>
            <img src={region.currentConditions.iconURL}/>
            <h2>{region.region}</h2>
            <p>{region.currentConditions.temp.c}°</p>
        </div>
    );
}