import React from 'react';
import { streamCreate } from '../actions';
import { useDispatch } from 'react-redux';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
    const dispatch  = useDispatch();

    const onStreamCreate = formVlaues =>{
        dispatch(streamCreate(formVlaues))
    }

    return (
       <div>
        <h3>Create a Stream</h3>
        <StreamForm onStreamCreate={onStreamCreate} />
       </div>
    );
};


export default StreamCreate;