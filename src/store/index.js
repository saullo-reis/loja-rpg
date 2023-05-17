import { configureStore } from "@reduxjs/toolkit";
import sliceItems from "./store";

const store = configureStore({
    reducer: {
        items: sliceItems,
    },
});

export default store;