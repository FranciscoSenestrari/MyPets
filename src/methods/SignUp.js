import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signup = (fullName, email, password, navigation) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const current = auth().currentUser;
      firestore()
        .collection('users')
        .add({
          firstname: fullName,
          email: email,
          uid: current.uid,
          password: password,
        })
        .then(() => {
          navigation.navigate('Login');
        });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('The email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        alert('The email address is invalid!');
      }

      alert(error.toString());
    });
};
