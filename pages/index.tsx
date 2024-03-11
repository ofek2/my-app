import React from 'react';
import MainApp from '../components/MainApp';
import Conversation from '../components/Conversation';

const Home: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-2/3">
        <Conversation />
      </div>
      <div className="w-1/3">
        <MainApp />
      </div>
    </div>
  );
};

export default Home;