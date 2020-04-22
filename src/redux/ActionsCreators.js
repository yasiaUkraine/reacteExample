import * as ActionsType from './ActionsType';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionsType.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
//извлечения блюд
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));//Мы посмотрим, что будет делать посуду с загрузкой в ближайшее время.

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({ // єто условии что все блюда должні біть загружені
    type: ActionsType.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({// сообщаеться об ошибке 
    type: ActionsType.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionsType.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionsType.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionsType.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionsType.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionsType.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionsType.ADD_PROMOS,
    payload: promos
});