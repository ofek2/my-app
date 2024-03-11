// redux/conversationSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  sender: string;
  text: string;
}

type Conversation = {
    title: string;
    participants: string[];
    messages: Message[];
};

interface ConversationState {
    selectedConversation: Conversation | null;
}

const initialState: ConversationState = {
  selectedConversation: null,
};

const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    selectConversation(state, action: PayloadAction<Conversation>) {
      state.selectedConversation = action.payload;
    },
    addMessage(state, action: PayloadAction<{ sender: string; text: string }>) {
      if (state.selectedConversation) {
        state.selectedConversation.messages.push(action.payload);
      }
    },
  },
});

export const { selectConversation, addMessage } = conversationSlice.actions;

export default conversationSlice.reducer;
