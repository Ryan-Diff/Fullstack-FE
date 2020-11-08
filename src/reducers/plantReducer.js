import { PREPEND_PLANT, SET_PLANTS } from '../actions/plantActions';

const initialState = {
    list: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PREPEND_PLANT:
            return { ...state, list: [action.payload, ...state.list] };
        case SET_PLANTS:
            return { ...state, list: action.payload };
    };
    return state;
}