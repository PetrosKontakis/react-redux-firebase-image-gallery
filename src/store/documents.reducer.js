import initState from './store';


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
        case "DELETE_DOCUMENT":{

            const {deleteImageDocumentStore} = state;

            if(action.loading){
                deleteImageDocumentStore.setLoading();
            }else if(action.document){
                deleteImageDocumentStore.setImageDocument(action.document);
            }else if(action.error){
                deleteImageDocumentStore.setServerError(action.error);
            }

            return {
                ...state,
                deleteImageDocumentStore
            }

        }
            
        case "GET_DOCUMENT": {
            const { getImageDocumentStore } = state;

            if (action.loading) {
                getImageDocumentStore.setLoading();
            }else if(action.document){
                getImageDocumentStore.setImageDocument(action.document)
            }else if(action.error){
                getImageDocumentStore.setServerError(action.error);
            }
            return {
                ...state,
                getImageDocumentStore
            }
        }
    
        case "GET_DOCUMENTS":{
            const { getImageDocumensStore } = state;
            if(action.loading){
                getImageDocumensStore.setLoading();
            }else if (action.documents){
                getImageDocumensStore.setImageDocuments(action.documents)
            }else if (action.error){
                getImageDocumensStore.setServerError(action.error);
            }
            return {
                ...state,
                getImageDocumensStore
            }
        }
            
        case "CREATE_DOCUMENT":{
            
            const {createImageDocumentStore} = state;
            if(action.loading){
                createImageDocumentStore.setLoading();
            }else if (action.documents){
                createImageDocumentStore.setImageDocuments(action.documents)
            }else if (action.error){
                createImageDocumentStore.setServerError(action.error);
            }
            return {
                ...state,
                createImageDocumentStore
            }
        }
            
        default:
            return state
    }
}

export default documentReducer;