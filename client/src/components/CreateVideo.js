import React from 'react';

const CreateVideo = (props) => {
    return (
        <>
            <h2>Create a new Video</h2>
            <form>
            <label>Title</label>
            <input type="text" />
            <br />
            <label>Url</label>
            <input type="text" />
            <br/>
            <button>Submit</button>
            </form>
            
            <hr/>
        </>
    );
};


export default CreateVideo;
