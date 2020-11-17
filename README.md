# Instructions to run the app

To quickly test this app with expo follow the following instructions

1. Follow this [link](https://docs.expo.io/) to download expo cli.

2. Clone this repo

3. Install all the dependencies with following command:

```
yarn add
```

4. Register for newsapi api key  using this [link](https://newsapi.org/register).

5. After getting the api key add the following line to `rn-news-app/secret_key.js` :
```javascript
export const apiKey = <YOUR API KEY IN QUOTES>;
```

6. run the command:

```
yarn start
```