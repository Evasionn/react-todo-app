import React from 'react';
import {hot} from 'react-hot-loader/root';
import '../node_modules/todomvc-app-css/index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {Provider} from 'react-redux';
import store from './redux-store';

function App() {
    return (
        <section className="todoapp">
            <Provider store={store}>
                <Header/>
                <Main/>
                <Footer/>
            </Provider>
        </section>
    );
}

export default hot(App);
