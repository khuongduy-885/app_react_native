import {combineReducers} from 'redux';
import {modalMessage} from './ModalMessage';
import {modal} from './Modal.js';

const appReducer = combineReducers({
    modalMessage,
    modal,
});
const rootReducer = (state, action) => {
    return appReducer(state, action);
};
export default rootReducer;
