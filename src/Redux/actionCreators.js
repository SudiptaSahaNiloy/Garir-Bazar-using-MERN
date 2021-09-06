import axios from "axios";
import * as actionTypes from './actionTypes';

export const loadCars = (cars) => {
    // console.log(cars);
    return {
        type: actionTypes.LOAD_CARS,
        payload: cars,
    }
}

export const selectedCar = (car) => {
    return {
        type: actionTypes.SELECTED_CAR,
        payload: car,
    }
}

export const Car = () => dispatch => {
    // console.log("loadcars");
    axios.get('http://localhost:3001/CarCollection')
        .then(response => dispatch(loadCars(response.data)))
}
