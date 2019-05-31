import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDYefnvwm3HhhnufJ0X6TDmduJ9m8lcdbg",
    authDomain: "p-project-6eb83.firebaseapp.com",
    databaseURL: "https://p-project-6eb83.firebaseio.com",
    projectId: "p-project-6eb83",
    storageBucket: "p-project-6eb83.appspot.com",
    messagingSenderId: "571066696652",
    appId: "1:571066696652:web:a2f2aa637e6c7e4a",
    userProfile: null
});

const db = firebase.firestore();

export const realTimeUpdate = () => {
    return (dispatch, getState) => {
        db.collection("imageDocuments").orderBy("createDate")
            .onSnapshot(function (documentSnapshots) {

                console.log("Real time executed")
                var documents = documentSnapshots.docs.map((dc) => {
                    return {
                        ...dc.data(),
                        id: dc.id
                    }
                }).reverse();
                dispatch({ type: 'GET_DOCUMENTS', documents });

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