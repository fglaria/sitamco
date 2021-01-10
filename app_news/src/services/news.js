require('dotenv').config();

const SERVER_URL = 'http://localhost:9000';

const fakeNewses = [
 {
   body: 'there is something wrong with judy',
   imgUrl: '',
   title: 'something'
 }
];

export const getAll = () => {
  if (process.env.REACT_APP_DEBUG == 1) {
    return Promise.resolve(fakeNewses)
  }

  return fetch(`${SERVER_URL}/noticias/list`)
    .then(res => {
      return res.json();
    })
}

export const create = news => {
  fetch(`${SERVER_URL}/noticias/createNews`, {
    method: 'POST',
    headers: {
      // 'Access-Control-Allow-Origin': 'http://localhost:3000',
      // 'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(news)
  })
  .then(response => {
    console.log(response);
  }).catch(error =>{
    console.error(error);
  });
}
