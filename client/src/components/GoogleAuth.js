import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initGoogleAuth, trySignIn, trySignOut, changeAuth} from "../actions";

class GoogleAuth extends Component {
    componentDidMount() {
        this.props.initGoogleAuth(this.props.changeAuth);
    }

    authButton = () => {
        switch (this.props.auth.isSignedIn) {
            case true:
                return (
                    <button className='ui red google button' onClick={this.props.trySignOut}>
                        <i className='google icon'/>
                        Logout
                    </button>
                );
            case false:
                return (
                    <button className='ui red google button' onClick={this.props.trySignIn}>
                        <i className='google icon'/>
                        Login
                    </button>
                );
            default:
                return null
        }
    };

    render() {
        return (
            <div className='item'>
                {this.authButton()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const actions = {
    initGoogleAuth,
    changeAuth,
    trySignIn,
    trySignOut
};

export default connect(mapStateToProps, actions)(GoogleAuth);