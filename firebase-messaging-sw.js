console.log("serrrrrrrvice worker");

importScripts('../firebase/firebase-app.js');
importScripts('../firebase/firebase-messaging.js');

firebase.initializeApp({
	'messagingSenderId' : '509920232790'
});

const messaging = firebase.messaging();
       