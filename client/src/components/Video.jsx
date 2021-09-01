import React, { Fragment } from "react";

const Videos = (props) => {
    const { title, embededVideos, rating } = props.Video;
    return (
        <Fragment>
            <h2>{title}</h2>
            <p>Number of Votes: {rating}</p>
            <button>Up Votes</button>
            <button>Down Votes</button>
            <hr/>
        </Fragment>
    );
};

export default Videos;