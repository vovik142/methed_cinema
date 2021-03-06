const API_KEY = '5c31d5046f8054082927bc596628154f';
const BASE__URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = `&language=ru-RU`
// trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `Что-то пошло не так, ошибка ${response.status}`
    })
    
    .catch(err => console.error(err));
    

    export const getTriends = async (type = 'all', period = 'week', page = 1) => {
     const url = `${BASE__URL}/trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`
     return await getData(url)
     
    };
