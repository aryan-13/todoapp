import firebase from 'firebase/app';
import 'firebase/firestore';

// import { initializeApp, firebase } from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyDFau_-2dN_2tOkEanc4c5Ew5fmgNwU5YM',
	authDomain: 'todos-33b5a.firebaseapp.com',
	projectId: 'todos-33b5a',
	storageBucket: 'todos-33b5a.appspot.com',
	messagingSenderId: '595904389293',
	appId: '1:595904389293:web:ee2dbd04dfb753f5736624',
};
if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
