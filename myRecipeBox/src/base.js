import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCt8GazcObOZw6-g1FPGo6cUaB4KgnY1Ao",
    authDomain: "my-recipebox-354ee.firebaseapp.com",
    databaseURL: "https://my-recipebox-354ee.firebaseio.com",
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())


export default base;