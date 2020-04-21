import * as ActionsType from './ActionsType';
import { DISHES } from '../shared/dishes';

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

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
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