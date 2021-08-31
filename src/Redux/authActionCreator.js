import axios from "axios";
import * as actionTypes from "./actionTypes.js";

// export const authSuccess = (idToken, localId) => {
//     return ({
//         type: actionTypes.AUTH_SUCCESS,
//         payload: {
//             idToken: idToken,
//             localId: localId,
//         },
//     })
// }

// export const authLogout = () => {
//     localStorage.removeItem('idToken');
//     localStorage.removeItem('expirationTime');
//     localStorage.removeItem('localId');
//     localStorage.removeItem('displayName');
//     return ({ type: actionTypes.AUTH_LOGOUT });
// }

// export const authFailed = (errMsg) => {
//     return {
//         type: actionTypes.AUTH_FAILED,
//         payload: errMsg,
//     }
// }

export const auth = (email, password) => dispatch => {
    const URL = 'http://localhost:3001/Customer';

    axios.get(URL)
        .then(response => {
            response.data.map((item, id) => {
                if(item.Email === email && item.Password === password){
                    console.log(response.data[id]);
                    localStorage.setItem('Name', response.data[id].Name)
                }
            })
        })
    // .catch(error => {
    //     dispatch(authFailed(error.response.data.error.message));
    //     setTimeout(() => {
    //         dispatch(authFailed(null));
    //     }, 4000);
    // })
}

// // remember me section. Used to stay logged in
// export const authCheck = () => dispatch => {
//     const token = localStorage.getItem('idToken');
//     const expirationTime = new Date(localStorage.getItem('expirationTime'));
//     const userId = localStorage.getItem('localId');
//     const userName = localStorage.getItem('displayName');
//     if (!token) {
//         // logout
//         dispatch(authLogout());
//     } else {

//         if (expirationTime <= new Date()) {
//             // logout 
//             dispatch(authLogout());
//         } else {
//             dispatch(authSuccess(token, userId));
//             dispatch(displayName(userName));
//         }
//     }
// }

// const displayName = (userName) => {
//     return {
//         type: actionTypes.LOAD_USER_DATA,
//         payload: userName,
//     }
// }


export const userData = (values) => dispatch => {
    let firstName = values.firstName;
    let lastName = values.lastName;
    const fullName = firstName + " " + lastName;

    const userData = {
        Name: fullName,
        Email: values.email,
        Password: values.password,
        CurrentAddress: values.currentAddress,
        NID: values.NID,
    }

    const URL = 'http://localhost:3001/Customer';
    axios.post(URL, userData)
        .then(response => {
            console.log(response.data);
        })
}



