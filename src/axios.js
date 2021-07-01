import axios from "axios";


const instance = axios.create({
    baseURL: 'https://us-central1-challenge-2ef9a.cloudfunctions.net/api' 
    //'http://localhost:5001/challenge-2ef9a/us-central1/api' //THE API (cloud function) URL
});

export default instance;