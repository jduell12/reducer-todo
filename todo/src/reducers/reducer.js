export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892897589
}

export const reducer = (state, action) => {
    switch(action.type){
        case "COMPLETE_TASK":
            return{
                ...state,
                completed: true
            }
        default:
            return state;
    }
}