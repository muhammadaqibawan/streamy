import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStream, editStream } from '../actions';
import StreamForm from './StreamForm';

const StreamEdit = props => {
    const dispatch  = useDispatch();
    const [stream, setStream] = useState(null)

    useEffect(()=>{
        dispatch(fetchStream(props.match.params.id)).then(res=>{
            setStream(res.data)
        })
    }, [dispatch, props.match.params])

    const onStreamEdit = formValues =>{
        dispatch(editStream(stream.id, { title: formValues.title, description: formValues.description }))
    }

    return (
        <div>
            <h3>Create a Stream</h3>
            <StreamForm onStreamCreate={onStreamEdit} initialValues={stream} />
        </div>
    );
};

export default StreamEdit;