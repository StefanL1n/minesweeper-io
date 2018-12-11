import {SIGN_IN, SIGN_OUT} from './types';

export const initGoogleAuth = changeAuth => dispatch => {
    window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: '492598489063-eusvjipianms450ht3ttp0jtsmdsd18l.apps.googleusercontent.com',
            scope: 'email'
        }).then(()=>{
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(changeAuth);
            dispatch(changeAuth);
        });
    });
};

export const changeAuth = () => {
    if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
        return {
            type: SIGN_IN,
            payload: window.gapi.auth2.getAuthInstance().currentUser.get().getId()
        }
    } else {
        return {type: SIGN_OUT}
    }
};

export const trySignIn = () => () => window.gapi.auth2.getAuthInstance().signIn();

export const trySignOut = () => () => window.gapi.auth2.getAuthInstance().signOut();