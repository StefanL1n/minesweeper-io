import {MOUSE_ENTER_CELL,
    MOUSE_LEAVE_CELL,
    REVEAL_CELL,
    FLAG_CELL,
    UNFLAG_CELL,
    CREATE_CELL,
    DELETE_CELL,
    EDIT_CELL,
    FETCH_CELL,
    FETCH_CELLS
} from "../actions/types";
import _ from 'lodash';

const INIT_STATE = {
    cells: {},
    height: null,
    width: null,
    gameStatus: 'loading',
    mineCount: null,
    mouseOnCellId: null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case MOUSE_ENTER_CELL:
            return {...state, mouseOnCellId: action.payload.id};
        case MOUSE_LEAVE_CELL:
            return state.mouseOnCellId === action.payload.id ? {...state, mouseOnCellId: null} : state;
        case REVEAL_CELL:
            return {...state, [action.payload.id]: action.payload};
        case FLAG_CELL:
            return {...state, [action.payload.id]: action.payload};
        case UNFLAG_CELL:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_CELL:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_CELL:
            return _.omit(state, action.payload.id);
        case EDIT_CELL:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_CELL:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_CELLS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}