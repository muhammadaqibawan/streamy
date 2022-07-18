import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStream } from '../actions';

const StreamShow = props => {

    const dispatch  = useDispatch();
    const [stream, setStream] = useState(null)

    useEffect(()=>{
        dispatch(fetchStream(props.match.params.id)).then(res=>{
            setStream(res.data)
        })
    }, [dispatch, props.match.params])


    return (
        <div>
            <h3> { stream?.title } </h3>
            <p> { stream?.description } </p>
        </div>
    );
};

export default StreamShow;