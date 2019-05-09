import { createStore } from 'redux'

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":{
            state = state + action.payload
            break;
        }
        case "SUBTRACT":{
            state = state - action.payload
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
