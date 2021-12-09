const API_KEY = '845aa96a329ce37c9447925f7156687e';
const BASE_URL = 'https://api.themoviedb.org/3/';
//trending/all/day?api_key=

const getData = url => {
  fetch(url)
  .then(response => {
    console.log(response);
  })
};

export const getTriends = () => {
  getData()
}