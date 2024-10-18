import { createStore } from 'redux';

// Initial State
const initialState = {
  theme: 'light' // Default theme is light
};

// Action Types
const TOGGLE_THEME = 'TOGGLE_THEME';

// Action Creators
export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

// Reducer
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

// Store
const store = createStore(themeReducer);

export default store;
