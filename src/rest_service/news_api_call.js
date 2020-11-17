import { apiKey } from '../../secret_key';
import axios from 'axios';

const category = 'general';

const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

export async function returnArticles () {
    try {
        let headlines = await fetch(url);
        let resp = await headlines.json()
        console.log(resp)
        return resp.articles;
    } catch(err){
        throw err;
    }
};