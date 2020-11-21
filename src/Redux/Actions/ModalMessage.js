import t from '../../Common/Languages';
import {APP_MODAL_ID_MAIN, MESSAGAE_PRIMARY} from '../../Common/Constants';

export const MODAL_OPEN_MESSAGE = 'MODAL_OPEN_MESSAGE';
export const MODAL_CLOSE_MESSAGE = 'MODAL_CLOSE_MESSAGE';

/**
 *
 * @param message
 * @param _confirm
 * @param type
 * @param hasConfirm
 * @param title
 * @param id
 * @param visible
 * @returns {{payload: {_confirm: *, hasConfirm: boolean, visible: boolean, title: any, message: string}, id: string, type: string}}
 */

export function showMessageConfirm(message = '', _confirm, type = MESSAGAE_PRIMARY, hasConfirm = true, title = t('label.messageTitle'), id = APP_MODAL_ID_MAIN, visible = true) {
    return {
        type: MODAL_OPEN_MESSAGE,
        id,
        payload: {
            title,
            type,
            message,
            hasConfirm,
            visible,
            _confirm,
        },
    };
}

/**
 *
 * @param message
 * @param type
 * @param hasConfirm
 * @param title
 * @param id
 * @param visible
 * @returns {{payload: {hasConfirm: boolean, visible: boolean, title: any, message: string}, id: string, type: string}}
 */

export function showMessage(message = '', type = MESSAGAE_PRIMARY, hasConfirm = false, title = t('label.messageTitle'), id = APP_MODAL_ID_MAIN, visible = true) {
    return {
        type: MODAL_OPEN_MESSAGE,
        id,
        payload: {
            title,
            type,
            message,
            hasConfirm,
            visible,
        },
    };
}

export function hideMessage(id, visible = false) {
    return {
        id,
        type: MODAL_CLOSE_MESSAGE,
        payload: {
            visible,
        },
    };
}

