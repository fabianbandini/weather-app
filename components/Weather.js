import {useState} from "react";
import WeatherAPI from "../lib/api/weatherAPI";
import styles from "./weather.module.scss";
import WeatherEntry from "./WeatherEntry";

export default function Weather() {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [currentResp, setCurrentResp] = useState(null);

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const resp = await WeatherAPI.get(input).then()

        if (resp) {
            setCurrentResp(resp);
            return;
        }

        setError("This Location does not exist");
    }

    return (
        <div className={styles.content}>
            {
                (currentResp) && <WeatherEntry region={currentResp}/>
            }
            <form onSubmit={handleClick}>
                <input placeholder="location" onChange={handleInput}/>
                <p>{error}</p>
                <button type={"submit"}>Search</button>
            </form>
        </div>
    )
}