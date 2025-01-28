```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only run once after the initial render
    console.log('useEffect ran');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```