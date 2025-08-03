import React, { createContext, useReducer, useEffect, useContext } from 'react';
import axios from 'axios';

const MotorbikesContext = createContext();

const initialState = {
    motorbikes: [],
    loading: true,
    error: null
};

const motorbikesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MOTORBIKES':
            return { ...state, motorbikes: action.payload, loading: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export const MotorbikesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(motorbikesReducer, initialState);

    useEffect(() => {
        axios.get('http://localhost:9999/Motorbikes')
            .then(res => dispatch({ type: 'SET_MOTORBIKES', payload: res.data }))
            .catch(err => dispatch({ type: 'SET_ERROR', payload: err.message }));
    }, []);

    return (
        <MotorbikesContext.Provider value={{ state, dispatch }}>
            {children}
        </MotorbikesContext.Provider>
    );
};

export const useMotorbikesContext = () => useContext(MotorbikesContext);
