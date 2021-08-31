import axios from "axios";
import * as actionTypes from "./actionTypes.js";

export const authSuccess = (idToken, localId) => {
    return ({
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            idToken: idToken,
            localId: localId,
        },
    })
}

export const authLogout = () => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('localId');
    localStorage.removeItem('displayName');
    return ({ type: actionTypes.AUTH_LOGOUT });
}

export const authFailed = (errMsg) => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errMsg,
    }
}

export const auth = (email, password, mode) => dispatch => {
    const authData = {
        email: email,
        password: password,
        resturnSecureToken: true,
    }

    const API_KEY = 'AIzaSyDG6ZER5RUdy8cTHgJrSNyk-50y4UXwo1E';
    const URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

    axios.post(URL + mode + '?key=' + API_KEY, authData)
        .then(response => {
            const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationTime', expirationTime);
            localStorage.setItem('idToken', response.data.idToken);
            localStorage.setItem('localId', response.data.localId);

            dispatch(authSuccess(response.data.idToken, response.data.localId));

            axios.post(URL + 'lookup?key=' + API_KEY, { idToken: response.data.idToken })
                .then(userData => {
                    // console.log(userData.data.users[0].displayName);
                    localStorage.setItem('displayName', userData.data.users[0].displayName);
                    dispatch(displayName(userData.data.users[0].displayName));
                });
        })
        .catch(error => {
            dispatch(authFailed(error.response.data.error.message));
            setTimeout(() => {
                dispatch(authFailed(null));
            }, 4000);
        })
}

// remember me section. Used to stay logged in
export const authCheck = () => dispatch => {
    const token = localStorage.getItem('idToken');
    const expirationTime = new Date(localStorage.getItem('expirationTime'));
    const userId = localStorage.getItem('localId');
    const userName = localStorage.getItem('displayName');
    if (!token) {
        // logout
        dispatch(authLogout());
    } else {

        if (expirationTime <= new Date()) {
            // logout 
            dispatch(authLogout());
        } else {
            dispatch(authSuccess(token, userId));
            dispatch(displayName(userName));
        }
    }
}

const displayName = (userName) => {
    return {
        type: actionTypes.LOAD_USER_DATA,
        payload: userName,
    }
}


export const updateUserData = (firstName, lastName) => dispatch => {
    // console.log(firstName);
    const fullName = firstName + " " + lastName;
    const userData = {
        idToken: localStorage.getItem('idToken'),
        displayName: fullName,
        deleteAttribute: null,
        returnSecureToken: true,
    }

    const API_KEY = 'AIzaSyDG6ZER5RUdy8cTHgJrSNyk-50y4UXwo1E';
    const URL = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=';
    axios.post(URL + API_KEY, userData)
        .then(response => {
            // console.log(response.data.displayName);
            localStorage.setItem('displayName', response.data.displayName);
            dispatch(displayName(response.data.displayName));
        })
        .catch(error => console.log(error));
}



