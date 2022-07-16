import React, { useEffect, useState } from 'react';
import Modal from '../Model';
import history from '../history';
import { useDispatch } from 'react-redux';
import { fetchStream, deleteStream } from '../actions';
import { Link } from 'react-router-dom';

const StreamDelete = props => {
    const dispatch  = useDispatch();
    const [stream, setStream] = useState(null)

    useEffect(()=>{
        dispatch(fetchStream(props.match.params.id)).then(res=>{
            setStream(res.data)
        })
    }, [dispatch, props.match.params])

    const renderAction = ()=>{
        return (
            <React.Fragment>
                <div className="ui button negative" onClick={()=> dispatch(deleteStream(stream.id))}>Delete</div>
                <Link className="ui cancel button" to='/'>Cancel</Link>
            </React.Fragment>
        )
    }

    const renderedContent = ()=>{
        if(!stream){
            return 'Are you sure to delete this stream?'
        } else{
            return `Are you sure to delete this stream with title ${stream.title}`
        }
    }

    return (
        <div>
            Stream Delete
            <Modal 
            header='Delete Stream' 
            content={renderedContent()}
            action={renderAction()}
            Dismiss={()=> history.push('/') } />
        </div>
    );
};

export default StreamDelete;