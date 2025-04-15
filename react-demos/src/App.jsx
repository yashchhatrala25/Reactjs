const App = () => {
  const myName = "YashChhatrala"
  const multiply = (a, b) => a * b;
  const specialClass = 'special-class'
  return (
  <>
    <p>2 + 2 = {2+2}</p>
    <h2>{myName}</h2>
    <p>My Friends List: {["Yash", "Rahul", "Jay", "Sagar"]}</p>
    <p>2 * 10 = {multiply(2,10)}</p>
    <p className={specialClass}>This is special class</p>
  </>
  )
}

export default App