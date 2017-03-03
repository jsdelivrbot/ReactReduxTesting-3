import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

    constructor(props) {
        super(props);

        this.state = { comment: '' };
    }

    onChangeHandler(event) {
        this.setState({
            comment: event.target.value
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ''
        });
    }

    render() {
        return(
            <form onSubmit={this.onSubmitHandler.bind(this)} className="comment-box">
                <textarea name="commentBox" id="commentBox" cols="30" rows="10"
                          onChange={this.onChangeHandler.bind(this)}
                          value={this.state.comment} />
                <button action="submit">Submit Comment</button>
            </form>
        );
    }

}

export default connect(null, actions)(CommentBox);