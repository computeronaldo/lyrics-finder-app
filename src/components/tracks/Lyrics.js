import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

import Moment from "react-moment";
import Spinner from "../layout/Spinner";

const Lyrics = (props) => {
  const [track, setTrack] = useState();
  const [lyrics, setLyrics] = useState();

  const { match } = props;
  const { id } = match.params;

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=919923c6db5a1bfef273a4a03938dbff`
      )
      .then((res) => {
        //console.log(res);
        setLyrics(res.data.message.body.lyrics_body);

        return axios
          .get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=919923c6db5a1bfef273a4a03938dbff`
          )
          .then((res) => {
            //console.log(res);
            setTrack(res.data.message.body.track);
          });
      })
      .catch((err) => console.log(err));
  }, []);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track.track_name} by{" "}
            <span className="text-secondary">{track.track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {track.track.primary_genres.music_genre_list.length === 0
              ? "NO GENRE AVAILABLE"
              : track.track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Release Date</strong>:{" "}
            <Moment format="MM/DD/YYYY">
              {track.track.first_release_date}
            </Moment>
          </li>
        </ul>
      </>
    );
  }
};

export default withRouter(Lyrics);
