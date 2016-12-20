console.log("serrrrrrrvice worker");

importScripts('./bower_components/firebase/firebase-app.js');
importScripts('./bower_components/firebase/firebase-messaging.js');

firebase.initializeApp({
	'messagingSenderId' : '509920232790'
});

const messaging = firebase.messaging();
       