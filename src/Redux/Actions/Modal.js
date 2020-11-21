export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export function showModal(value){
    console.log("Actions: "+ value);
    return{
        type:SHOW_MODAL,
        payload:{
            isVisible:value
        }
    }
}
export function hideModal(value){
    return{
        type:HIDE_MODAL,
        payload:{
            isVisible:value
        }
    }
}