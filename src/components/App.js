import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    render(){               
        return (
            <div className="container-fluid">
                <h1>Escreva um comentário</h1>
                
                <Post />               
            </div>
        )
    }
}