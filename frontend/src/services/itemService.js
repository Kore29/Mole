import axios from "axios";

const API_URL = "http://localhost:5000/items";

export const getItems = () => axios.get(API_URL).then(res => res.data);
export const createItem = (data) => axios.post(API_URL, data);
