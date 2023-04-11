import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Home;