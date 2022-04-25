import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/",
    header: {
        "content-type":"application/json",
    },
});