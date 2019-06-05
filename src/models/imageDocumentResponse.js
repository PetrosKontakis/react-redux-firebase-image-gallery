import BasicHttpResponse from './basicHttpResponse';
import ImageDocument from './imageDocument';

class ImageDocumentResponse extends BasicHttpResponse{

    imgDoc;

    constructor(){
        super();
        this.imgDoc = new ImageDocument();
    }

    setImageDocument = (response) => {
        this.setResponse(response)
        const {title, url, id, content} = response
        this.imgDoc.setImageDocument(title, url, id, content)
    }

}

export default ImageDocumentResponse;