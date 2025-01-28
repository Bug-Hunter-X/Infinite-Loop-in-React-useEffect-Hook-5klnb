# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug causes an infinite loop due to incorrect state management within the `useEffect` dependency array.

## Bug Description
The `MyComponent` component utilizes the `useEffect` hook to increment a state variable (`count`) on every render.  This creates an infinite loop because setting the state triggers a re-render, which in turn triggers the `useEffect` again, leading to a continuous cycle.

## Bug Solution
The solution involves modifying the `useEffect` hook to properly manage state updates.  The dependency array is left empty to ensure the effect only runs once after the initial mount.  Alternatively, a condition can be added to control when state is updated.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the count in the browser console constantly increasing.