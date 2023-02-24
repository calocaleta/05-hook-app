import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();
  const value = 2;

  return (
    <>
      <h1>Counter with Custom Hook: {counter}</h1>
      <hr />
      <button className="btn btn-rimary" onClick={() => increment(value)}>+{value}</button>
      <button className="btn btn-rimary" onClick={reset}>Reset</button>
      <button className="btn btn-rimary" onClick={() =>
        decrement(value)}>-{value}</button>
    </>
  )
}