import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [Urlid, setUrld] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response) => {

      setMovies(response.data.results)
    }).catch(error => {
      // alert('Network Error')
    })

  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {


    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length != 0) {
        setUrld(response.data.results[0])
      } else {
        console.log("Array Empty");
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) =>
          <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />

        )}



      </div>
      {Urlid && <Youtube opts={opts} videoId={Urlid.key} />}
    </div>
  )
}

export default Rowpost
