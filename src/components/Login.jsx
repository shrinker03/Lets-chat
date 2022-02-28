import React from 'react'
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
import 'firebase/app'

import {auth} from '../firebase'
import firebase from 'firebase/app'

const Login = () => {
  return (
    <div id='login-page'>
        <div id='login-card'>
            <h1 style={{color: '#000428'}}>Welcome</h1>
            <h2 style={{color: '#000428'}}>Let's Chat<span className='wave'>👋</span></h2>
            <div className='login-button google' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} >
              <GoogleOutlined/> Sign In With Google
            </div>
        </div>
    </div>
  )
}

export default Login