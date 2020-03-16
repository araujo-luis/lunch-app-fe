import React, { FC } from 'react';

interface Lunch {
    id: number;
    plate_name: string;
    plate_description: string;
    restaurant_name: string;
    category: string;
    price: number;
    plate_image: string;
}
interface LunchProps {
    lunch: Lunch;
}

const RandomLunch: FC<LunchProps> = (props) => {
    return (
        <div>lunsh</div>
    )

}

export default RandomLunch;