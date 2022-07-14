import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signIn, signOut } from './actions';
let auth;
const GoogelOAuth = () => {
    const signedIn = useSelector((state) => state.auth.isSignedIn)
    const dispatch  = useDispatch();

    useEffect(()=>{
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: process.env.REACT_APP_OAUTH_ID,
                scope: 'email',
                plugin_name: "streamy"
            }).then(()=>{
                auth = window.gapi.auth2.getAuthInstance();
                onAuthChange(auth.isSignedIn.get())
                auth.isSignedIn.listen(onAuthChange)
            })
        })
    }, [])

    const onAuthChange = (isSignedIn)=>{ 
    if(isSignedIn){ 
        dispatch(signIn(auth.currentUser.get().getId()))
    } else{ 
        dispatch(signOut())
    }
}

    const authSignInClick = ()=>{
        auth.signIn()
    }

    const authSignOutClick = ()=>{
        auth.signOut()
    }

    const renderedAuth = ()=>{
        if(signedIn === null){
            return null
        } else if(signedIn){
            return (
                <div className='ui red google button' onClick={authSignOutClick}>
                    <i className='google icon'></i>
                    Sign Out
                </div>
            )
        } else{
            return (
                <div className='ui red google button' onClick={authSignInClick}>
                    <i className='google icon'></i>
                    Sign In With Google
                </div>
            )
        }
    }

    return (
        <div>
            { renderedAuth() }
        </div>
    );
};

export default GoogelOAuth;