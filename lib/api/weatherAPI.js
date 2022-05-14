import {BASE_URL, getJSON} from "./index";

const WeatherAPI = {
    get(location) {
        try {
            return getJSON(`${BASE_URL}${location}`);
        }catch (e){
            throw e;
        }
    }
}

export default WeatherAPI;