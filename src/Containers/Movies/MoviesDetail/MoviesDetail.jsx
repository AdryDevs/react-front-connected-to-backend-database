import React, {  } from 'react';
import { useSelector } from 'react-redux';
import { movieData } from '../movieSlice';
import { userData } from '../userSlice';

const MoviesDetail = () => {
    const selectedMovie = useSelector(movieData);
    const userCredentials = useSelector(userData);

    if(selectedMovie !== undefined) {

    return (
        <div>
            {selectedMovie?.title}
            {userCredentials?.credentials?.token !== undefined} &&
            <button>Rent Now</button>
        </div>
    )
    } else {
        return (
            <div>
                Invalid movie selected
            </div>
        )
    }
}

export default MoviesDetail;