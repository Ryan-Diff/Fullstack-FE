import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlant } from '../../actions/plantActions';

const createPlant = () => {
    const [name, setName] = useState('');
    const [commonName, setCommonName] = useState('');
    const [description, setDescription] = useState('');
    const [waterNeeds, setWaterNeeds] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        if(target.name === 'name') setName(target.value);
        if(target.name === 'commonName') setCommonName(target.value);
        if(target.name === 'description') setDescription(target.value); 
        if(target.name === 'waterNeeds') setWaterNeeds(target.value);
        if(target.name === 'imageUrl') setImageUrl(target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createPlant({
            name,
            commonName,
            description,
            waterNeeds,
            imageUrl
        }));
        setName('');
        setCommonName('');
        setDescription('');
        setWaterNeeds('');
        setImageUrl('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='plant-name'>Plant Name</label>
            <input
                id='plant-name'
                type='text'
                name='name'
                value={name}
                onChange={handleChange}
            />
            <label htmlFor='plant-common-name'>Common Name</label>
            <input
                id='plant-common-name'
                type='text'
                name='common-name'
                value={commonName}
                onChange={handleChange}
            />
            <label htmlFor="plant-description">Plant Description</label>
            <textarea
                id="plant-description"
                name="description"
                value={description}
                onChange={handleChange}>
            </textarea>
            <label htmlFor='water-needs'>Watering Needs</label>
            <input
                id='water-needs'
                type='text'
                name='water-needs'
                value={waterNeeds}
                onChange={handleChange}
            />
            <label htmlFor='image-url'>Image URL</label>
            <input
                id='image-url'
                type='text'
                name='image-url'
                value={imageUrl}
                onChange={handleChange}
            />
            <button>Add Plant</button>
        </form>
    );
};

export default createPlant;