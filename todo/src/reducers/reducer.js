export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892897589
}]


export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_NEW_TASK":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]
        case "COMPLETE_TASK":
            return{
                ...state,
                completed: true
            }
        default:
            return state;
    }
}