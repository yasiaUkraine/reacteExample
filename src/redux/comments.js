
import * as ActionsType from './ActionsType';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {
                
        case ActionsType.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionsType.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
            
        case ActionsType.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return { ...state, comments: state.comments.concat(comment)};

        default:
          return state;
      }
};