import React, { useState } from 'react';
import uuid from 'react-uuid';
import * as NewsService from '../../services/news';
// eslint-disable-next-line
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';

require('dotenv').config();

// required parameter to fetch images
const imageKit_urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_END_POINT;
// optional parameters (needed for client-side upload)
const imageKit_publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY; 
const server_authenticationEndpoint = process.env.REACT_APP_SERVER_AUTHENTICATION_ENDPOINT;

const useMergingState = initialState => {
  const [state, _setState] = useState(initialState);

  const setState = newState => _setState(oldState => ({
    ...oldState,
    ...newState,
  }));

  return [state, setState];
};

const CreateNews = () => {
  const [news, setNews] = useMergingState({
    body: '',
    image: null,
    title: '',
  });

  const imgUploadSuccess = (res) =>{
    console.log(res);
    setNews({ 
      image: res,
    });
  };

  const imgUploadError = (error) =>{
    console.error(error);
  };

  // console.log(news);

  const onSubmit = (e) => {
    e.preventDefault();

    NewsService.create(news);
  };

  return (
    <div className="col col-10 mx-auto mt-5">
      <h1>Crear nueva noticia</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text" className="form-control"
            onChange={({ target: { value } }) => setNews({ title: value })}
            value={ news.title }
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Imágen</label>
          {/*<ErrorBoundary>*/}
            <IKContext
              urlEndpoint={ imageKit_urlEndpoint }
              publicKey={ imageKit_publicKey }
              authenticationEndpoint={ server_authenticationEndpoint }
            >
              {/* {<IKImage 
                urlEndpoint={ imageKit_urlEndpoint }
                src={ news.img && news.img.url }
              />} */}
              <IKUpload 
                fileName="news_"
                className="form-control-file"
                tags={ ["news"] }
                token={ uuid() }
                folder="news"
                onError={ imgUploadError }
                onSuccess={ imgUploadSuccess }
              />
            {/*<input
              type="file" className="form-control-file"
              onChange={({ target: { files } }) => setNews({ image: files[0] })}
              ref={fileRef}
            />*/}
            </IKContext>
          {/*</ErrorBoundary>*/}
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
