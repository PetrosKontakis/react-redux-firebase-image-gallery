
class BasicHttpResponse {

    loading;

    serverError;

    _response;

    constractor() {
        this.loading = false;
        this.serverError = '';
        this._response = null;

    }

    setLoading() {
        this.loading = true;
        this.serverError = null;
        this._response = null;
    }

    setServerError(error) {
        this.loading = false;
        this.serverError = error;
        this._response = null;
    }

    setResponse(response) {
        this.loading = false;
        this.serverError = '';
        this._response = response;
    }

    
    isLoaded = () => {
        return !this.loading;
    }

    isLoading = () => {
        return this.loading;
    }

    getServerError = () => {
        return this.serverError;
    }

    hasServerError = () => {
        return this.isLoaded() && this.serverError !== '';
    }

}

export default BasicHttpResponse;