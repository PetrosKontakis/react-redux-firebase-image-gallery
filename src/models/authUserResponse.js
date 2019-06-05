import BasicHttpResponse from './basicHttpResponse';

class AuthUserResponse extends BasicHttpResponse {


    displayName;
    email; 
    emailVerified;
    photoURL; 
    isAnonymous; 
    uid; 
    providerData;


    setAuthUser (response) {
        this.setResponse(response);
        const { displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData } = response;
        this.displayName = displayName;
        this.email = email;
        this.emailVerified = emailVerified;
        this.photoURL = photoURL;
        this.isAnonymous = isAnonymous;
        this.uid = uid;
        this.providerData = providerData;
    }

    logOut () {
        this.displayName = null;
        this.email = null;
        this.emailVerified = null;
        this.photoURL = null;
        this.isAnonymous = null;
        this.uid = null;
        this.providerData = null;
    }
    isUserAuth = () =>{
        return this.uid !== null
    }

}

export default AuthUserResponse;