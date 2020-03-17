import React, { FC, useState, useEffect } from "react";
import axios from 'axios';
import dotenv from 'dotenv';
import RandomLunch, { Lunch } from "../components/RandomLunch";

dotenv.config();

const baseUrl = process.env.BASE_URL || 'http://localhost:4000';

const LunchPicker: FC = () => {

    const [randomLunch, setRandomLunch] = useState<Lunch>();

    useEffect(() => {
        console.log("base URL");
        console.log(baseUrl);
        axios.get(`${baseUrl}/lunch`).then(res => {
            console.log(res.data);

            setRandomLunch(res.data);
            console.log(randomLunch);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            < h3 > Lunch Picker</h3 >
            <RandomLunch
                id={randomLunch?.id}
                plate_name={randomLunch?.plate_name}
                plate_description={randomLunch?.plate_description}
                restaurant_name={randomLunch?.restaurant_name}
                category={randomLunch?.category}
                price={randomLunch?.price}
                plate_image={randomLunch?.plate_image} />
        </div>
    )
}

export default LunchPicker;