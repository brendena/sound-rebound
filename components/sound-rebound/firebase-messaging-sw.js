console.log("serrrrrrrvice worker");

//importScripts('./bower_Components/firebase/firebase-app.js');
//importScripts('./bower_Components/firebase/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');



firebase.initializeApp({
	'messagingSenderId' : '509920232790'
});

const messaging = firebase.messaging();

console.log(messaging);

//while(true){
//	console.log("jesus");
//}