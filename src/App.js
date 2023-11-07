import { useState } from "react"
import { allToppings } from "./components/Data"
import { Checkbox } from "./components/Checkbox"
function App() {
  const [toppings, setToppings] = useState(allToppings)

  const updateCheckStatus = index => {
    setToppings(
      toppings.map((topping, currentIndex) =>
        currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping
      )
    )
  }

  const selectAll = () => {
    setToppings(toppings.map(topping => ({ ...topping, checked: true })))
  }
  const unSelectAll = () => {
    setToppings(toppings.map(topping => ({ ...topping, checked: false })))
  }

  return (
    <div className="App">
      <p>
        <button onClick={selectAll}>Select All</button>
        <button onClick={unSelectAll}>Unselect All</button>
      </p>

      {toppings.map((topping, index) => (
        <Checkbox
          key={topping.name}
          isChecked={topping.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={topping.name}
          index={index}
        />
      ))}
      <p>
        <pre>{JSON.stringify(toppings, null, 2)}</pre>
      </p>
    </div>
  )
}

export default App
