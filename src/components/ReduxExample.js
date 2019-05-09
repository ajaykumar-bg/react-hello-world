import { createStore, combineReducers, applyMiddleware } from 'redux'


const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
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

const userReducer = (state = {
    name: "Ajay",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":{
            state = {
                ...state,
                name: action.payload
            }
            break;
        }
        case "SET_AGE":{
            state = {
                ...state,
                age: action.payload
            }
            break;
        }
        default:
            break;
    }
    return state
}

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action", action);
    next(action);
};

const store = createStore(combineReducers( 
    {mathReducer, userReducer}), 
    {}, 
    applyMiddleware(myLogger)
);

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

store.dispatch({
    type: "SET_NAME",
    payload: "Raj"
});

store.dispatch({
    type: "SET_AGE",
    payload: 30
});


