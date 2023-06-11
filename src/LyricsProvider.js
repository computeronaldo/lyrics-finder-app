import React, { useEffect, useState } from "react";
import axios from "axios";
import LyricsContext from "./lyrics-context";

const DUMMY_TRACKS = [];

const heading = "Top 10 Tracks";

const LyricsProvider = (props) => {
  const [trackState, setTrackState] = useState({
    track_list: DUMMY_TRACKS,
    heading,
  });

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=919923c6db5a1bfef273a4a03938dbff`
      )
      .then((res) => {
        //console.log(res);
        setTrackState((prevTrackState) => {
          return {
            ...prevTrackState,
            track_list: res.data.message.body.track_list,
          };
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <LyricsContext.Provider value={trackState}>
      {props.children}
    </LyricsContext.Provider>
  );
};

export default LyricsProvider;
