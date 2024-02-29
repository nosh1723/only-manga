import React from 'react';
import axios from "axios";

const request = axios.create({
    baseURL: 'https://api.mangadex.org/'
})

export default request;