import BasicHttpResponse from './basicHttpResponse';
import ImageDocument from './imageDocument';

class ImageDocumentsResponse extends BasicHttpResponse {

    imgDocs;

    constructor(){
        super();
        this.imgDocs = [];
    }


    removeItem (document)  {
        this.imgDocs = this.imgDocs.filter((doc)=> doc.id !== document.id);
    }

    setImageDocuments  (response) {
        this.setResponse(response)
        this.imgDocs = response.map( (doc) => {
            const {title, url, id, content} = doc
            return new ImageDocument(title, url, id, content)
        });
    }

    getDocuments = () => {
        return this.imgDocs;
    }

    
}

export default ImageDocumentsResponse;