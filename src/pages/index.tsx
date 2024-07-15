import React from 'react';
import Login from '@/components/Login';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Twitter Login App</h1>
        <Login />
      </header>
    </div>
  );
};

export default App;
