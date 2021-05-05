const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// trigger on creating a new project in firestore to create a notification
const createNotification = notification => {
    return admin.firestore().collection('notifications').add(notification)
        .add(notification)
        .then(doc => console.log('notification added', doc))
}

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: 'Added a new project',
        user: project.author,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})

// trigger notification on creating new user
exports.userJoined = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid).get()
        .then(doc => {
            const newUser = doc.data();
            const notification = {
                content: 'Joined the party',
                user: newUser.username,
                time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotification(notification)
        })
})