import React from 'react';
import TokenLauncher from './components/TokenLauncher';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TokenLauncher />
    </div>
  );
}

export default App;
import React from 'react';
import TokenLauncher from './components/TokenLauncher';
import DepositWithdraw from './components/DepositWithdraw';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <TokenLauncher />
      <DepositWithdraw />
    </div>
  );
}

export default App;
