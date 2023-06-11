import React, { useContext } from "react";
import LyricsContext from "../../lyrics-context";
import Spinner from "../layout/Spinner";

const Tracks = () => {
  const { track_list } = useContext(LyricsContext);

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return <h1>Tracks loaded</h1>;
  }
};

export default Tracks;
