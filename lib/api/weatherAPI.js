import {BASE_URL, getJSON} from "./index";

const WeatherAPI = {
    get(location) {
        const resp =  getJSON(`${BASE_URL}${location}`);

        if(resp.status === "200"){
            return resp;
        }

        return resp;
    }
}

export default WeatherAPI;