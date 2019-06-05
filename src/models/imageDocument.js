
class ImageDocument {

    
    title;
    url;
    id;
    content;

    constructor(title, url, id, content){
        this.title = title;
        this.url = url;
        this.id = id;
        this.content = content;
    }

    setImageDocument = (title, url, id, content) => {
        this.title = title;
        this.url = url;
        this.id = id;
        this.content = content;
    
    }
}

export default ImageDocument;