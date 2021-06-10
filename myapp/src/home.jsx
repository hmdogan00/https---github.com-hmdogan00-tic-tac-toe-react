import React from 'react';
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div>
            <h1>Tic-Tac-Toe App</h1>
            <Link to="/ai-mode">Go to AI mode</Link><br/>
            <Link to="/2p-mode">Go to 2 player mode</Link>
        </div>
    );
};
export default Home