import React, { useRef, useState } from 'react';
import * as News from '../../services/news';

const useMergingState = initialState => {
  const [state, _setState] = useState(initialState);

  const setState = newState => _setState(oldState => ({
    ...oldState,
    ...newState
  }))

  return [state, setState];
}

const CreateNews = () => {
  const fileRef = useRef();

  const [news, setNews] = useMergingState({
    body: '',
    image: null,
    title: '',
  })

  console.log(news)

  const onSubmit = (e) => {
    e.preventDefault();

    News.create(news)
  }

  return (
    <div className="col col-10 mx-auto mt-5">
      <h1>Crear nueva noticia</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Títutlo</label>
          <input
            type="text" className="form-control"
            onChange={({ target: { value } }) => setNews({ title: value })}
            value={news.title}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Imágen</label>
          <input
            type="file" className="form-control-file"
            onChange={({ target: { files } }) => setNews({ image: files[0] })}
            ref={fileRef}
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Contenido</label>
          <textarea
            className="form-control" rows="5"
            onChange={({ target: { value } }) => setNews({ body: value })}
            value={news.body}
          >
          </textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default CreateNews;
