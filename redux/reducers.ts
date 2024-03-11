
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import chatReducer from './chatSlice';
import themeReducer from './themeSlice'; // Import the theme reducer
import conversationReducer from './conversationSlice'; // Import the theme reducer

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  theme: themeReducer,
  conversation: conversationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;