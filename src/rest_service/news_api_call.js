import { apiKey } from '../../secret_key';



export async function returnArticles (category) {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
    try {
        let headlines = await fetch(url);
        let resp = await headlines.json()
        console.log(resp)
        return resp.articles;
    } catch(err){
        throw err;
    }
};