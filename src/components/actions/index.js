import { 
    SIGN_IN,
    SIGN_OUT,
    STREAM_CREATE,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from './type';
import axios from '../axios';
import history from '../../components/history';
export const signIn = (userId)=>{
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = ()=>{
    return {
        type: SIGN_OUT
    };
};

export const streamCreate = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await axios.post('streams', {...formValues, userId})
    dispatch({ type: STREAM_CREATE, payload: response.data })
    history.push('/')
}

export const fetchStreams = () => async dispatch => {
    const response = await axios.get('streams')
    dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const fetchStream = id => async dispatch => {
    const response = await axios.get(`streams/${id}`)
    dispatch({ type: FETCH_STREAM, payload: response.data })
    return response
}

export const editStream = (id, formValues)=> async dispatch => {
    console.log(formValues)
    const response = await axios.patch(`streams/${id}`, formValues)
    dispatch({ type: EDIT_STREAM, payload: response.data })
    history.push('/')
}

export const deleteStream = id=> async dispatch => {
    await axios.delete(`streams/${id}`)
    dispatch({ type: DELETE_STREAM, payload: id })
}