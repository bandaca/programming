import * as React from 'react';
import * as actions from '../actions/index';
import { connect, Dispatch } from 'react-redux';
import AuthenticationContext from 'adal-angular';

export interface Props {
    dispatch: Dispatch<actions.TodoAction>;
}

//(window as any).AuthenticationContext = AuthenticationContext;

var context = new AuthenticationContext({
    instance: 'https://login.microsoftonline.com/',
    tenant: 'intersysconsulting.com',
    clientId: '26b14af3-fed8-40c6-bb62-9b8dcb4357c8',
    postLogoutRedirectUri: window.location.origin,
    redirectUri: 'http://localhost:3000/redirect',
    cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
});

context.handleWindowCallback();

let AddItem = ({ dispatch }:Props) => {
    let input:HTMLInputElement|null;
    
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input || !input.value.trim()) {
                        return
                    }
                    dispatch(actions.addItem(input.value))
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">
                    Add Todo
                </button><br/>
                <input type="button" onClick={e => {
                    e.preventDefault();
                    context.login();
                }} value="Login" />
                <input type="button" onClick={e => {
                    e.preventDefault();
                    context.logOut();
                }} value="Logout" />
            </form>
        </div>
    );
}

export default connect()(AddItem);