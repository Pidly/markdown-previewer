const reducer = (state = 'default text', action) => {
    switch(action.type) {
        case 'MESSAGE':
            return action.message;
        default:
            return state;
    }
};

export default reducer;