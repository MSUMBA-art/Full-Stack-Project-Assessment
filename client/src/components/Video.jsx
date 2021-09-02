import React from "react";

const Video = (props) => {
    const { title, embededVideos, rating } = props.video;
    return (
        <>
            <h2>{title}</h2>
            <p>Number of Votes: {rating}</p>
            <button>Up Votes</button>
            <button>Down Votes</button>
            <hr/>
        </>
    );
};

export default Video;