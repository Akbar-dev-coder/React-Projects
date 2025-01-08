import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) => {},
    decrement: (state, action) => {},
    add: (state, action) => {},
    subtract: (state, action) => {},
  },
});

const counterStore = configureStore({
  reducers: {
    counter: counterSlice.reducer,
  },
});
export const counterAction = counterSlice.actions;
export default counterStore;

/* 
const Initial_Value = {
  counter: 0,
  privacy: false,
};


const counterReducer = (store = Initial_Value, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBS") {
    return { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};
  */
