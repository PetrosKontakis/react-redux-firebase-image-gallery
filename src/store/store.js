import ImageDocumentResponse from '../models/imageDocumentResponse';
import ImageDocumentsResponse from '../models/imageDocumentsResponse';
import AuthUserResponse from '../models/authUserResponse';

const initState = {
    list: [],
    loading: false,
    serverError: false,
    logedUser: {},
    isAuth: false,
    authLoaded: false,


    authUserStore: new AuthUserResponse(),
    getImageDocumensStore: new ImageDocumentsResponse(),
    getImageDocumentStore: new ImageDocumentResponse(),
    deleteImageDocumentStore: new ImageDocumentResponse(),
    editImageDocumentStore: new ImageDocumentResponse(),
    createImageDocumentStore: new ImageDocumentResponse()
}

export default initState 