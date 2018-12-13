import {
    SIGN_IN,
    SIGN_OUT,
    MOUSE_ENTER_CELL,
    MOUSE_LEAVE_CELL,
    REVEAL_CELL,
    FLAG_CELL,
    UNFLAG_CELL,
    CREATE_CELL,
    DELETE_CELL,
    EDIT_CELL,
    FETCH_CELL,
    FETCH_CELLS
} from './types';
import cells from '../apis/cells';

export const initGoogleAuth = changeAuth => dispatch => {
    window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: '492598489063-eusvjipianms450ht3ttp0jtsmdsd18l.apps.googleusercontent.com',
            scope: 'email'
        }).then(()=>{
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(changeAuth);
            dispatch(changeAuth);
        });
    });
};

export const changeAuth = () => {
    if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
        return {
            type: SIGN_IN,
            payload: window.gapi.auth2.getAuthInstance().currentUser.get().getId()
        }
    } else {
        return {type: SIGN_OUT}
    }
};

export const trySignIn = () => () => window.gapi.auth2.getAuthInstance().signIn();

export const trySignOut = () => () => window.gapi.auth2.getAuthInstance().signOut();

export const mouseEnterCell = id => {
    return {
        type: MOUSE_ENTER_CELL,
        payload: {id}
    }
};

export const mouseLeaveCell = id => {
    return {
        type: MOUSE_LEAVE_CELL,
        payload: {id}
    }
};

export const revealCell = id => async dispatch => {
    const response = await cells.patch('./cells/'+id, {isRevealed: true});
    dispatch({type: REVEAL_CELL, payload: response.data});
};

export const flagCell = id => async dispatch => {
    const response = await cells.patch('./cells/'+id, {isFlagged: true});
    dispatch({type: FLAG_CELL, payload: response.data});
};

export const unflagCell = id => async dispatch => {
    const response = await cells.patch('./cells'+id, {isFlagged: false});
    dispatch({type: UNFLAG_CELL, payload: response.data});
};

export const createCell = cell => async dispatch => {
    const response = await cells.post('./cells', cell);
    dispatch({type: CREATE_CELL, payload: response.data});
};

export const deleteCell = id => async dispatch => {
    await cells.delete('./cells/'+id);
    dispatch({type: DELETE_CELL, payload: {id}});
};

export const editCell = (id, cell) => async dispatch => {
    const response = await cells.put('./cells/'+id, cell);
    dispatch({type: EDIT_CELL, payload: response.data});
};

export const fetchCell = id => async dispatch => {
    const response = await cells.get('./cells/'+id);
    dispatch({type: FETCH_CELL, payload: response.data});
};

export const fetchCells = () => async dispatch => {
    const response = await cells.get('./cells');
    dispatch({type: FETCH_CELLS, payload: response.data});
};