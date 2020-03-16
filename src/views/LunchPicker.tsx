import React, { FC, useState } from "react";
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config();

const baseUrl = process.env.BASE_URL;

const LunchPicker: FC = () => {

    const [randomLunch, setRandomLunch] = useState();
    const [loading, setLoading] = useState();
    const [errorCall, setErrorCall] = useState(false);

    const callApi = async () => {
        try {
            const data = await axios.get(`${baseUrl}/lunch`);
            console.log("DATA");
            console.log(data);
            return data;
        } catch (err) {

        }
    }


    return (
        <div>
            <span>    {callApi()}</span>
            < h3 > Lunch Picker</h3 >
        </div>
    )
}

export default LunchPicker;