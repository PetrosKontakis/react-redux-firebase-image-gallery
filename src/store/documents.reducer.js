const initState = {
    list: [],
    requestedDocument: {},
    loading: false,
    serverError: false,
    logedUser: {},
    isAuth: false,
    authLoaded: false
}


const documentReducer = (state = initState, action) => {

    switch (action.type) {

        case "USER_LOGEDIN":
            return {
                ...state,
                logedUser: action.user,
                isAuth: true,
                authLoaded: true
            }
        case "USER_LOGEDOUT":
            return {
                ...state,
                logedUser: {},
                isAuth: false,
                authLoaded: true
            }
        case "DELETE_DOCUMENT":
            return {
                ...state,
                list: state.list.filter(doc => doc.id !== action.document.id)
            }
        case "GET_DOCUMENT":
            return {
                ...state,
                loading: false,
                serverError: false,
                requestedDocument: { ...action.document }
            }
        case "GET_DOCUMENTS":
            return {
                ...state,
                loading: false,
                serverError: false,
                list: [
                    ...action.documents
                ]
            }
        case "GET_DOCUMENTS_SERVER_ERROR":
            return {
                loading: false,
                serverError: true,
                list: null
            }
        case "GET_DOCUMENTS_LOADING":
            return {
                loading: true,
                serverError: false,
                list: null
            }
        case "CREATE_DOCUMENT":
            return {
                ...state,
                list: [
                    action.document,
                    ...state.list.filter(doc => action.document.id !== doc.id)
                ]
            }
        default:
            return state
    }
}

export default documentReducer;