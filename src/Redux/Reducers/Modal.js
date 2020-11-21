import {HIDE_MODAL,SHOW_MODAL} from '../Actions/Modal.js';

const initialValues={
    isVisible:false,
}
export function modal(state = initialValues, action) {
    console.log("Reducers: "+ action.type);
    switch (action.type){
            case SHOW_MODAL:
            return {
                ...state,
                ...action.payload,
            };
        case  HIDE_MODAL :
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }

}