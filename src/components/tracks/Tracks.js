import React, { useContext } from "react";
import LyricsContext from "../../lyrics-context";
import Spinner from "../layout/Spinner";
import Track from "../tracks/Track";

const Tracks = () => {
  const { track_list, heading } = useContext(LyricsContext);

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map((item) => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>
    );
  }
};

export default Tracks;
