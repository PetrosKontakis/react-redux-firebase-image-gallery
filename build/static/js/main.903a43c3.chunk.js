(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(59)},43:function(e,t,n){},48:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),i=n.n(o),c=(n(43),n(3)),u=n(5),l=n(7),s=n(6),m=n(8),d=n(10),h=n(16),p=n(19),g=(n(48),n(9)),E=n(22),f=n.n(E);n(49),n(52);f.a.initializeApp({apiKey:"AIzaSyDYefnvwm3HhhnufJ0X6TDmduJ9m8lcdbg",authDomain:"p-project-6eb83.firebaseapp.com",databaseURL:"https://p-project-6eb83.firebaseio.com",projectId:"p-project-6eb83",storageBucket:"p-project-6eb83.appspot.com",messagingSenderId:"571066696652",appId:"1:571066696652:web:a2f2aa637e6c7e4a",userProfile:null});var v=f.a.firestore(),b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onClickHandler=function(e){n.props.deleteDocument(n.props.image)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.image,t=e.id,n=e.url,a=e.title,o=e.content;return r.a.createElement("div",null,r.a.createElement("h5",null,a," - ",t),r.a.createElement("p",null,o),r.a.createElement("img",{src:n,style:{maxWidth:"100%"},alt:a}),r.a.createElement("button",{onClick:this.onClickHandler},"Delete"),r.a.createElement(h.b,{to:"edit/"+t},"Edit"))}}]),t}(a.Component),O=Object(d.b)(null,function(e){return{deleteDocument:function(t){return e(function(e){return function(t,n){t({type:"DELETE_DOCUMENT",loading:!0}),v.collection("imageDocuments").doc(e.id).delete().then(function(n){t({type:"DELETE_DOCUMENT",document:e})}).catch(function(e){t({type:"DELETE_DOCUMENT",error:e})})}}(t))}}})(b),D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.list;return r.a.createElement("div",null,e&&e.map(function(e){return r.a.createElement(O,{image:e,key:e.id})}))}}]),t}(a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.getDocuments()}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.loading,a=e.serverError;return!this.props.isAuth&&this.props.authLoaded?r.a.createElement(p.a,{to:"/login"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Galery"),r.a.createElement(h.b,{to:"/create"},"Create new "),n&&r.a.createElement("div",null,"loading..."),a&&r.a.createElement("div",null,"Server error!"),t&&r.a.createElement(D,{list:t}))}}]),t}(a.Component),y=Object(d.b)(function(e){return{list:e.document.getImageDocumensStore.getDocuments(),loading:e.document.getImageDocumensStore.isLoading(),serverError:e.document.getImageDocumensStore.getServerError(),isAuth:e.auth.authUserStore.isUserAuth(),authLoaded:e.auth.authUserStore.isLoaded()}},function(e){return{getDocuments:function(){return e(function(e,t){e({type:"GET_DOCUMENTS",loading:!0}),v.collection("imageDocuments").orderBy("createDate").get().then(function(t){var n=t.docs.map(function(e){return Object(g.a)({},e.data(),{id:e.id})}).reverse();e({type:"GET_DOCUMENTS",documents:n})}).catch(function(t){e({type:"GET_DOCUMENTS",error:t})})})}}})(j),S=n(17),U=n(21),I=n(37),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",url:""},n.onInputChange=function(e){n.setState(Object(S.a)({},e.target.id,e.target.value))},n.onInputFileInput=function(e){var t=Object(U.a)(n);if(e.length>0){var a=e[0],r=new FileReader;r.readAsDataURL(a),r.onload=function(){t.setState({url:r.result})},r.onerror=function(e){console.log("Error: ",e)}}},n.onFormSubmit=function(e){e.preventDefault();var t=Object(g.a)({},n.state,{createDate:(new Date).getTime()});n.setState({title:"",content:"",url:""}),n.props.createDocument(Object(g.a)({},t)),n.props.history.push("/")},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.title,a=t.content,o=t.url;return!this.props.isAuth&&this.props.authLoaded?r.a.createElement(p.a,{to:"/login"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Add to gallery"),r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement(I.a,{onDrop:this.onInputFileInput},function(t){var i=t.getRootProps,c=(t.getInputProps,t.isDragActive),u=t.isDragReject,l=t.rejectedFiles;return r.a.createElement("div",i(),c&&r.a.createElement("span",null,"Is drag active"),u&&r.a.createElement("span",null,"Is drag reject"),l&&r.a.createElement("span",null,"Rejected files"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Title: "),r.a.createElement("input",{type:"text",id:"title",value:n,onChange:e.onInputChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"content"},"Description: "),r.a.createElement("input",{type:"text",id:"content",value:a,onChange:e.onInputChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"url"},"Url: "),r.a.createElement("input",{type:"text",id:"url",value:o,onChange:e.onInputChange})),o&&r.a.createElement("div",null,r.a.createElement("img",{src:o,alt:n})))}),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"file"},"File: "),r.a.createElement("input",{type:"file",id:"file",onChange:function(t){return e.onInputFileInput(t.target.files)}})),r.a.createElement("button",{type:"submit"},"add")))}}]),t}(a.Component),L=Object(d.b)(function(e){return{isAuth:e.auth.authUserStore.isUserAuth(),authLoaded:e.auth.authUserStore.isLoaded()}},function(e){return{createDocument:function(t){return e(function(e){return function(t,n){t({type:"CREATE_DOCUMENT",loading:!0}),v.collection("imageDocuments").add(e).then(function(n){t({type:"CREATE_DOCUMENT",document:Object(g.a)({},e,{id:n.id})})}).catch(function(e){t({type:"CREATE_DOCUMENT",error:e})})}}(t))}}})(C),T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",url:"",id:""},n.componentWillReceiveProps=function(e){if(e.getImageDocumentStore&&e.getImageDocumentStore.imgDoc){var t=e.getImageDocumentStore.imgDoc,a=t.title,r=t.content,o=t.url,i=t.id;n.setState({title:a,content:r,url:o,id:i})}},n.componentWillMount=function(e){n.props.getDocument(n.props.match.params.id)},n.onInputChange=function(e){n.setState(Object(S.a)({},e.target.id,e.target.value))},n.onFormSubmit=function(e){e.preventDefault();var t=n.state,a={title:t.title,content:t.content,id:t.id};n.setState({title:"",content:"",url:"",id:""}),n.props.editDocument(Object(g.a)({},a)),n.props.history.push("/")},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.getImageDocumentStore,t=this.state,n=t.title,a=t.content,o=t.url;return!this.props.isAuth&&this.props.authLoaded?r.a.createElement(p.a,{to:"/login"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Add to gallery"),!e.isLoaded()&&r.a.createElement("div",null,"loading..."),e.hasServerError()&&r.a.createElement("div",null,"Server error!"),e.isLoaded()&&r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Title: "),r.a.createElement("input",{type:"text",id:"title",value:n,onChange:this.onInputChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"content"},"Description: "),r.a.createElement("input",{type:"text",id:"content",value:a,onChange:this.onInputChange})),r.a.createElement("img",{src:o,alt:n}),r.a.createElement("button",{type:"submit"},"edit")))}}]),t}(a.Component),A=Object(d.b)(function(e){return{isloaded:e.document.getImageDocumentStore.isLoaded(),getImageDocumentStore:e.document.getImageDocumentStore,isAuth:e.auth.authUserStore.isUserAuth(),authLoaded:e.auth.authUserStore.isLoaded()}},function(e){return{getDocument:function(t){return e((n=t,function(e,t){e({type:"GET_DOCUMENT",loading:!0}),v.collection("imageDocuments").doc(n).get().then(function(t){e({type:"GET_DOCUMENT",document:Object(g.a)({id:t.id},t.data())})}).catch(function(t){e({type:"GET_DOCUMENT",erorr:t}),console.log(t)})}));var n},editDocument:function(t){return e(function(e){return function(t,n){v.collection("imageDocuments").doc(e.id).update(e).then(function(e){}).catch(function(e){t({type:"GET_DOCUMENTS_SERVER_ERROR"})})}}(t))}}})(T),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},n.onInputChange=function(e){n.setState(Object(S.a)({},e.target.id,e.target.value))},n.onFormSubmit=function(e){e.preventDefault(),n.props.login({email:n.state.email,password:n.state.password})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=this.props,o=a.authLoaded,i=a.isAuth;return o&&i?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email: "),r.a.createElement("input",{type:"email",id:"email",value:t,onChange:this.onInputChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"Password"},"Password: "),r.a.createElement("input",{type:"password",id:"password",value:n,onChange:this.onInputChange})),r.a.createElement("button",{type:"submit"},"login")))}}]),t}(a.Component),R=Object(d.b)(function(e){return{isAuth:e.auth.authUserStore.isUserAuth(),authLoaded:e.auth.authUserStore.isLoaded()}},function(e){return{login:function(t){return e((n=t,function(e,t){f.a.auth().signInWithEmailAndPassword(n.email,n.password).then(function(t){if(t.user){var n=t.user,a=n.displayName,r=n.email,o=n.emailVerified,i=n.photoURL,c=n.isAnonymous,u=n.uid,l=n.providerData;e({type:"USER_LOGEDIN",user:{displayName:a,email:r,emailVerified:o,photoURL:i,isAnonymous:c,uid:u,providerData:l}})}}).catch(function(e){console.log("Login error")})}));var n}}})(w),_=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){n.props.logout()},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:"/#",onClick:this.logout},"log out")}}]),t}(a.Component),N=Object(d.b)(null,function(e){return{logout:function(){return e(function(e,t){f.a.auth().signOut().then(function(){e({type:"USER_LOGEDOUT"})}).catch(function(e){console.log("Logout error")})})}}})(_),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.realTimeUpdate()}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/login",component:R}),r.a.createElement(p.b,{exact:!0,path:"/",component:y}),r.a.createElement(p.b,{path:"/create",component:L}),r.a.createElement(p.b,{path:"/edit/:id",component:A}))))}}]),t}(a.Component),M=Object(d.b)(null,function(e){return{realTimeUpdate:function(){return e(function(e,t){v.collection("imageDocuments").orderBy("createDate").onSnapshot({includeMetadataChanges:!0},function(t){var n=t.docs.map(function(e){return Object(g.a)({},e.data(),{id:e.id})}).reverse();e({type:"GET_DOCUMENTS",documents:n})}),f.a.auth().onAuthStateChanged(function(t){if(t){var n=t.displayName,a=t.email,r=t.emailVerified,o=t.photoURL,i=t.isAnonymous,c=t.uid,u=t.providerData;e({type:"USER_LOGEDIN",user:{displayName:n,email:a,emailVerified:r,photoURL:o,isAnonymous:i,uid:c,providerData:u}})}else e({type:"USER_LOGEDOUT"})})})}}})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(18),G=function(){function e(){var t=this;Object(c.a)(this,e),this.isLoaded=function(){return!t.loading},this.isLoading=function(){return t.loading},this.getServerError=function(){return t.serverError},this.hasServerError=function(){return t.isLoaded()&&""!==t.serverError}}return Object(u.a)(e,[{key:"constractor",value:function(){this.loading=!1,this.serverError="",this._response=null}},{key:"setLoading",value:function(){this.loading=!0,this.serverError=null,this._response=null}},{key:"setServerError",value:function(e){this.loading=!1,this.serverError=e,this._response=null}},{key:"setResponse",value:function(e){this.loading=!1,this.serverError="",this._response=e}}]),e}(),x=function e(t,n,a,r){var o=this;Object(c.a)(this,e),this.setImageDocument=function(e,t,n,a){o.title=e,o.url=t,o.id=n,o.content=a},this.title=t,this.url=n,this.id=a,this.content=r},V=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).setImageDocument=function(t){e.setResponse(t);var n=t.title,a=t.url,r=t.id,o=t.content;e.imgDoc.setImageDocument(n,a,r,o)},e.imgDoc=new x,e}return Object(m.a)(t,e),t}(G),W=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).getDocuments=function(){return e.imgDocs},e.imgDocs=[],e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"removeItem",value:function(e){this.imgDocs=this.imgDocs.filter(function(t){return t.id!==e.id})}},{key:"setImageDocuments",value:function(e){this.setResponse(e),this.imgDocs=e.map(function(e){var t=e.title,n=e.url,a=e.id,r=e.content;return new x(t,n,a,r)})}}]),t}(G),P={list:[],loading:!1,serverError:!1,logedUser:{},isAuth:!1,authLoaded:!1,authUserStore:new(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).isUserAuth=function(){return null!==n.uid},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"setAuthUser",value:function(e){this.setResponse(e);var t=e.displayName,n=e.email,a=e.emailVerified,r=e.photoURL,o=e.isAnonymous,i=e.uid,c=e.providerData;this.displayName=t,this.email=n,this.emailVerified=a,this.photoURL=r,this.isAnonymous=o,this.uid=i,this.providerData=c}},{key:"logOut",value:function(){this.displayName=null,this.email=null,this.emailVerified=null,this.photoURL=null,this.isAnonymous=null,this.uid=null,this.providerData=null}}]),t}(G)),getImageDocumensStore:new W,getImageDocumentStore:new V,deleteImageDocumentStore:new V,editImageDocumentStore:new V,createImageDocumentStore:new V},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGEDIN":return Object(g.a)({},e,{logedUser:t.user,isAuth:!0,authLoaded:!0});case"USER_LOGEDOUT":return Object(g.a)({},e,{logedUser:{},isAuth:!1,authLoaded:!0});case"DELETE_DOCUMENT":var n=e.deleteImageDocumentStore;return t.loading?n.setLoading():t.document?n.setImageDocument(t.document):t.error&&n.setServerError(t.error),Object(g.a)({},e,{deleteImageDocumentStore:n});case"GET_DOCUMENT":var a=e.getImageDocumentStore;return t.loading?a.setLoading():t.document?a.setImageDocument(t.document):t.error&&a.setServerError(t.error),Object(g.a)({},e,{getImageDocumentStore:a});case"GET_DOCUMENTS":var r=e.getImageDocumensStore;return t.loading?r.setLoading():t.documents?r.setImageDocuments(t.documents):t.error&&r.setServerError(t.error),Object(g.a)({},e,{getImageDocumensStore:r});case"CREATE_DOCUMENT":var o=e.createImageDocumentStore;return t.loading?o.setLoading():t.documents?o.setImageDocuments(t.documents):t.error&&o.setServerError(t.error),Object(g.a)({},e,{createImageDocumentStore:o});default:return e}},J=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"USER_LOGEDIN":return t.authUserStore.setAuthUser(n.user),Object(g.a)({},t,{authReducer:e});case"USER_LOGEDOUT":return t.authUserStore.logOut(),Object(g.a)({},t,{authReducer:e});default:return t}},H=Object(F.c)({document:B,auth:J}),z=n(36),K=Object(F.d)(H,Object(F.a)(z.a));i.a.render(r.a.createElement(d.a,{store:K},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.903a43c3.chunk.js.map