import React from 'react';
import '../index.css'

export default class Comment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: true
        }

        this.handleInativePost = this.handleInativePost.bind(this);
    }

    handleInativePost(e) {
        e.preventDefault();

        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {                     
        return (            
            <div className="container-fluid">
                <div className="row">
                    <div className="list-group col-sm-4">
                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{this.props.email}</h5>
                                <small>{this.props.data}</small>
                            </div>
                            <p className="mb-1">{this.props.text}</p>
                            <div className="text-right">
                                <button className="comment" type="button" onClick={this.handleInativePost}>{this.state.isActive ? 'on' : 'off'}</button>
                                <button id={this.props.id} type="button" onClick={this.props.remove} className="fas fa-trash-alt comment" disabled={!this.state.isActive}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )        
    }    
}