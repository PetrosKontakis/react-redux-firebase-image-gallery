import initState from './store';


const authReducer = (state = initState, action) => {

    switch (action.type) {

        case "USER_LOGEDIN": {
            const { authUserStore } = state
            authUserStore.setAuthUser(action.user);
            return {
                ...state,
                authReducer
            }
        }
        case "USER_LOGEDOUT": {
            const { authUserStore } = state
            authUserStore.logOut();
            return {
                ...state,
                authReducer
            }
        }
        default:
            return state
    }
}

export default authReducer;