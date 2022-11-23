import React, { useState, useEffect } from 'react';
import './Series.scss';
// import loader from '../../img/load.gif';
import { bringSeries } from '../../Services/apiCalls';
// import Navigator from '../../components/Navigator/Navigator';
const Series = () => {
    //I will create a hook on which I will deposit the movies once they arrive to us...
    const [series, setSeries] = useState([]);
    // const [choosen, setChoosen] = useState("");
    const url = "https://image.tmdb.org/t/p/original"
    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.
        if (series.length === 0) {
            // bringmovies()
            setTimeout(() => {
                //Adding a 2 seconds delay on purpose...
                bringSeries().then(
                    (res) => {setSeries(res.data.results)
                        console.log(res)}
                );
            }, 2000);
        };
    }, [series]);
    // const selectSerie = (serie) => {
    //     console.log(serie)
    //     //I set the Hook with the choosen movie....
    //     setChoosen(serie);
    // }
    if (series.length > 0) {
        //This means that we HAVE movies inside our hook
        return (
            <div className="seriesShowcase">
                {/* Here I proceed to MAP the hook which contains all the movies */}
                {/* <Navigator pathUno={"/"} destinoUno={"Home"} pathDos={"/register"} destinoDos={"Register"}/> */}
                <div className="leftSide">
                    {
                        series.map(serie => {
                            return <div className="serieDesign" key={serie.id}>
                                <div>{serie.original_title}</div>
                                <div><img className="seriePic" src={url+serie.poster_path} /></div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    // else {
    //     //This return will take care of the loading screen...
    //     return (
    //         <div className='homeLoadingDesign'>
    //             <img className='spinner' src={loader} alt="loader" />
    //         </div>
    //     )
    // }
};
export default Series;
