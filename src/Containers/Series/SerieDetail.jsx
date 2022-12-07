import React from "react";
import state from '../../state';

const SerieDetail = ({ serie }) => {
    return (
        <div>
            <div onClick={() => state.resetserie()}>
                <h4>Back</h4>
            </div>
        <h1>{serie.title}</h1>
        <img src={serie.url_img} />
        <p>{serie.synopsis}</p>
        </div>
    );
    }

export default SerieDetail;