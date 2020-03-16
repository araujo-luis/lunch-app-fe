import React, { FC, useState, useEffect } from "react";
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.BASE_URL || 'http://localhost:4000';

const LunchPicker: FC = () => {

    const [randomLunch, setRandomLunch] = useState({ data: null });

    const callApi = async () => {
        console.log("base URL");
        console.log(baseUrl);
        axios.get(`${baseUrl}/lunch`).then(res => {
            console.log(res.data);

            setRandomLunch({ data: res.data });

        });

    }
    useEffect(() => {
        callApi();
    }, []);


    return (
        <div>
            <span> {randomLunch.data}</span>
            < h3 > Lunch Picker</h3 >
        </div>
    )
}

export default LunchPicker;