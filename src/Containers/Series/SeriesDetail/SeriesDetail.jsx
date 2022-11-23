import React from "react";
import { useSelector } from 'react-redux';
import { serieData } from '../serieSlice';
import { userData } from '../userSlice';

const SeiresDetail = () => {
    const selectedSerie = useSelector(serieData);
    const userCredentials = useSelector(userData);

    if(selectedSerie !== undefined) {
        return (
            <div>
                {selectedSerie?.title}
                {userCredentials?.credentials?.token !== undefined} &&
                <button>Rent Now</button>
            </div>
        )
    } else {
        return (
            <div>
                Invalid serie selected
            </div>
        )
    }
}

export default SeiresDetail;

