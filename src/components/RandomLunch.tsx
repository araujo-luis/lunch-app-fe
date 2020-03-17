import React, { FC } from 'react';

export interface Lunch {
    id?: number;
    plate_name?: string;
    plate_description?: string;
    restaurant_name?: string;
    category?: string;
    price?: number;
    plate_image?: string;
}


const RandomLunch: FC<Lunch> = (props) => {
    const { id, plate_name, plate_description, restaurant_name, category, price, plate_image } = props;

    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{plate_name}</li>
                <li>{plate_description}</li>
                <li>{restaurant_name}</li>
                <li>{category}</li>
                <li>{price}</li>
            </ul>
            <img src={plate_image} alt={plate_description} />
        </div>
    )

}

export default RandomLunch;