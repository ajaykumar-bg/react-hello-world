import { createStore } from 'redux'

const initialState = {
    result: 1,
    lastValues: [],
    id: 1,
    comments: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":{
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        }
        case "SUBTRACT":{
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        }
        default:
            break;
    }
    return state
}

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("Store Updated", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "SUBTRACT",
    payload: 20
});

store.dispatch({
    type: "ADD",
    payload: 50
});

store.dispatch({
    type: "SUBTRACT",
    payload: 30
});
