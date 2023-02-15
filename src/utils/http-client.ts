import axios from "axios";


const instance = axios.create({
  baseURL: "https://stage.getbani.com/api/v1/comhub/",
});



export default instance;