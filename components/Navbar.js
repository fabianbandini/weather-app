import styles from "./navbar.module.scss";
import {useRouter} from "next/router";

export default function Navbar(){
    const router = new useRouter();
    return (
        <div className={styles.content}>
            <img src={"/github.svg"} onClick={() => {router.push("https://github.com/fabianbandini/weather-app")}}/>
        </div>
    );
}