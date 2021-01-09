const SERVER_URL = 'http://localhost:9000';

const fakeNewses = [
 {
   body: 'there is something wrong with judy',
   imgUrl: '',
   title: 'something'
 }
];

export const getAll = () => {
  if (process.env.REACT_APP_DEBUG) {
    return Promise.resolve(fakeNewses)
  }

  return fetch(`${SERVER_URL}/noticias/list`)
    .then(res => {
      return res.json();
    })
}

export const create = news => {
  // upload image to cdn...
  // then...
  return fetch(`${SERVER_URL}/noticias/createNews`, {
    method: 'POST',
  })
}
