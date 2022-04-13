import React from 'react'

import { Container } from 'react-bootstrap'
import Spotify from './Assets/spotify.svg'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=e785a4f85953442c96197254d8f1ef6a&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}>
            <a className="btn btn-dark btn-lg" href={AUTH_URL}>Logar com o Spotify
                <img src={Spotify} style={{ width: "25px", marginLeft: "10px", }} />
            </a> 
        </Container>
    );
}