import {configureStore} from '@reduxjs/toolkit'
import studentReducer from '../feature/Slicer/studentSlice'

export const store = configureStore({
    reducer: studentReducer
})
// import { configureStore } from '@reduxjs/toolkit';
// import studentReducer from '../feature/Slicer/studentSlice'; // Adjust path if necessary

// // Load state from localStorage
// const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('studentsState');
//         if (serializedState === null) {
//             return undefined; // Return undefined if no state in localStorage
//         }
//         // Parse and return the state
//         return { students: JSON.parse(serializedState) }; // Adjust to match your state structure
//     } catch (err) {
//         console.error('Failed to load state from localStorage', err);
//         return undefined; // Return undefined on error
//     }
// };

// // Save state to localStorage
// const saveState = (state) => {
//     try {
//         const serializedState = JSON.stringify(state.students); // Access the specific part of state
//         localStorage.setItem('studentsState', serializedState);
//     } catch (err) {
//         console.error('Failed to save state to localStorage', err);
//     }
// };

// // Create store with initial state
// export const store = configureStore({
//     reducer: {
//         students: studentReducer
//     },
//     preloadedState: loadState()
// });

// // Subscribe to store changes
// store.subscribe(() => {
//     saveState(store.getState());
// });
