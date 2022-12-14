import auth from '@react-native-firebase/auth';
import {API_URL} from '@env';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: API_URL,
});
export const resetPassword = async (navigation, email) => {
  if (email === null) {
    alert('The field is empy ');
  } else {
    alert('Sending password reset');
    try {
      await auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          navigation.navigate('Login');
        });
    } catch (error) {
      alert(error.toString());
    }
  }
};
