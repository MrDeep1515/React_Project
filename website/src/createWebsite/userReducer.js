const initialState = {
    health: 'working',
    allUsers: [],
    singleUser: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL":
            return {
                ...state,
                allUsers: action.payload
            }

        case "BYID":
            return {
                ...state,
                singleUser: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;