import * as ActionsType from './ActionsType';

export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ActionsType.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionsType.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionsType.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};