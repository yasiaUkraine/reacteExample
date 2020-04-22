import * as ActionsType from './ActionsType';

export const Promotions = (state  = { isLoading: true, errMess: null, promotions:[]}, action) => {
    switch (action.type) {
            
        case ActionsType.ADD_PROMOS:
        return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionsType.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}

        case ActionsType.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};