import { postPlant } from '../services/plantsApi';

export const PREPEND_PLANT = 'PREPEND_PLANT';
export const prependPlant = plant => ({
    type: PREPEND_PLANT,
    payload: plant
});

export const SET_PLANTS = 'SET_PLANTS';
export const setPlants = plants => ({
    type: SET_PLANTS,
    payload: plants
});

export const createPlant = plant => dispatch => {
    postPlant(plant)
      .then(createdPlant => {
        dispatch(prependPlant(createdPlant));
      });
  };