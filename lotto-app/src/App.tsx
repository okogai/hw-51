import React from 'react';
import './App.css';
import Lotto from './components/Lotto';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1 className='main-heading'>Lotto</h1>
            <Lotto />
        </div>
    );
};

export default App;