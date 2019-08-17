import request from 'superagent'
import firebase from 'firebase/app';

export const fetchMainApi = async () => {
    const {body} = await request.get(
      'https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&APPID=139a21f597a82e543b40b68435fd2220'
    )
    console.log('API - ', body.list)
    return body.list
}

export const singInApi = async (email, password) => {
  console.log('Start Sign in API - ', email, password)
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(user => {
    console.log("Auth Token - ", user.user);
    localStorage.setItem("token", user.user.uid);
    return user.user;
  })
  .catch(error => {
    console.error(error);
    return error
  });
}