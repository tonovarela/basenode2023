
import axios from "axios";
export const http = {
    get: async (url:string) => {
        const { data } = await axios.get(url);
        return data;
    }
};

