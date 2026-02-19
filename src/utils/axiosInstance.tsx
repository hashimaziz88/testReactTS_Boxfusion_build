import axios from "axios";

export const getAxiosInstance = () =>
    axios.create({
        baseURL: "https://dummyjson.com/",
        headers: {
            "Content-Type": "application/json",
        },
    });
