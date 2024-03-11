// components/Conversation.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const Conversation: React.FC = () => {
  const selectedConversation = useSelector((state: RootState) => state.conversation.selectedConversation);

  return (
    <div className="w-2/3 p-4 bg-white">
      <div className="h-80 overflow-y-auto mb-4">
        {/* Display past messages */}
        {selectedConversation?.messages.map((message, index) => (
          <div key={index} className="mb-2">
            <strong>{message.sender}</strong>: {message.text}
          </div>
        ))}
      </div>
      <div>
        {/* Message input field */}
        <input type="text" placeholder="Type a message..." className="w-full p-2 border border-gray-300" />
        <button className="mt-2 p-2 bg-blue-500 text-white">Send</button>
      </div>
    </div>
  );
};

export default Conversation;
