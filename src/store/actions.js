import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConf} from '../config';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConf);


const db = firebase.firestore();

export const realTimeUpdate = () => {
    return (dispatch, getState) => {
        db.collection("imageDocuments").orderBy("createDate")
            .onSnapshot(function (documentSnapshots) {

                // console.log("Real time imageDocuments changes")
                var documents = documentSnapshots.docs.map((dc) => {
                    return {
                        ...dc.data(),
                        id: dc.id
                    }
                }).reverse();
                dispatch({ type: 'GET_DOCUMENTS', documents });

            });

        firebase.auth().onAuthStateChanged(function (user) {

            // console.log("Real time User changes")
            if (user) {
                // User is signed in.
                const { displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData } = user;
                dispatch({
                    type: 'USER_LOGEDIN',
                    user: { displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData }
                });
            } else {
                dispatch({
                    type: 'USER_LOGEDOUT'
                });
            }
        });
    }
}

export const createDocument = (document) => {
    return (dispatch, getState) => {

        // make async call to database
        db.collection("imageDocuments").add(document)
            .then((response) => {
                dispatch({
                    type: 'CREATE_DOCUMENT',
                    document: {
                        ...document,
                        id: response.id
                    }
                });
            }).catch((error) => {
                dispatch({ type: 'GET_DOCUMENTS_SERVER_ERROR' });
                console.error(error);
            })
    }
};

export const getDocuments = () => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'GET_DOCUMENTS_LOADING' });

        db.collection("imageDocuments")
            .orderBy("createDate").get().then(function (documentSnapshots) {

                var documents = documentSnapshots.docs.map((dc) => {
                    return {
                        ...dc.data(),
                        id: dc.id
                    }
                }).reverse();
                dispatch({ type: 'GET_DOCUMENTS', documents });

            }).catch((error) => {
                dispatch({ type: 'GET_DOCUMENTS_SERVER_ERROR' });
                console.log(error);
            })
    }
};

export const deleteDocument = (document) => {
    return (dispatch, getState) => {

        dispatch({
            type: 'DELETE_DOCUMENT',
            document
        });
        // make async call to database
        db.collection("imageDocuments").doc(document.id).delete()
            .then((response) => {
                // dispatch({
                //     type: 'DELETE_DOCUMENT',
                //     document
                // });
            }).catch((error) => {
                dispatch({ type: 'GET_DOCUMENTS_SERVER_ERROR' });
            })
    }
};

export const getDocument = (id) => {
    return (dispatch, getState) => {

        // make async call to database
        dispatch({ type: 'GET_DOCUMENTS_LOADING' });
        db.collection("imageDocuments")
            .doc(id).get()
            .then(function (documentSnapshots) {
                dispatch({ type: 'GET_DOCUMENT', document: { id: documentSnapshots.id, ...documentSnapshots.data() } })

            }).catch((error) => {
                dispatch({ type: 'GET_DOCUMENTS_SERVER_ERROR' });
                console.log(error);
            })
    }
}

export const editDocument = (document) => {
    return (dispatch, getState) => {

        // // make async call to database
        db.collection("imageDocuments").doc(document.id).update(document)
            .then((response) => {

            }).catch((error) => {
                dispatch({ type: 'GET_DOCUMENTS_SERVER_ERROR' });
            })
    }
}

export const login = (credentials) => {
    return (dispatch, getState) => {

        // const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((e) => {

            // console.log(e.user)
            if (e.user) {
                // User is signed in.
                const { displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData } = e.user;
                dispatch({
                    type: 'USER_LOGEDIN',
                    user: { displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData }
                });
            }
        }).catch((err) => {
            console.log("Login error")
        });
    }
}

export const logout = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'USER_LOGEDOUT'
            });
        }).catch((err) => {
            console.log("Logout error")
        });
    }
}