
import * as ActionsType from './ActionsType';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {
                
        case ActionsType.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionsType.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
            
        case ActionsType.ADD_COMMENT:
            /*Итак, как вы можете видеть, когда вы оставляете комментарий, сначала вы отправите комментарий на сервер, и если комментарий успешно добавлен на сайт сервера и сервер отправляет обратно сообщение об успешной публикации комментария, только тогда вы добавите его в магазин редуксов. Таким образом, вы гарантируете, что комментарий пользователя изменение данных на сайте сервера, прежде чем даже добавить их в это редукционное хранилище.*/
            var comment = action.payload;
            return { ...state, comments: state.comments.concat(comment)};

        default:
          return state;
      }
};