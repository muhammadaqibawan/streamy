import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../actions';

const StreamList = () => {
    const streams = useSelector((state) => Object.values(state.streams))
    const currentUser = useSelector((state) => state.auth.userId)
    const isSignedIn = useSelector((state) => state.auth.isSignedIn)
    const dispatch  = useDispatch();

    useEffect(()=>{
        dispatch(fetchStreams())
    }, [dispatch])

    const renderActionButton = stream=>{
        if(stream.userId === currentUser){
            return (
                <div className='right floated content'>
                    <Link className='ui button primary' to={`stream/edit/${stream.id}`}>Edit</Link>
                    <Link className='ui button negative' to={`stream/delete/${stream.id}`}>Delete</Link>
                </div>
            )
        }
    }

    const createStream = ()=>{
        if(isSignedIn){
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link className='ui button primary' to='/stream/create'> Create Stream </Link>
                </div>
            )
        }
    }

    const renderedList = ()=>{
        return streams.map(stream=>{
            return (
                <div className="item" key={stream.id}>
                    <i className="large camera middle aligned icon"></i>
                    <div className="content">
                        <div className="header">{stream.title}</div>
                        <div className="description">{stream.description}</div>
                    </div>
                    {renderActionButton(stream)}
                </div>
            )
        })
    }

    return (
        <div>
            <h2 className='header'>Streams</h2>
            <div className='ui celled list'>
            {renderedList()}
            </div>
            { createStream() }
        </div>
    );
};

export default StreamList;