
export const initialState = {
    counter: 0
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            };
        case 'RESET':
            return {
                counter: 0
            };
        default:
            return {
                state
            };
    }
};