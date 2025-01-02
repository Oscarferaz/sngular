import { useState } from "react"
import { InputForm } from "./components/form/Form"
import { SeriesCalculatorComponent } from "./containers/SeriesCalculatorComponent"
import { ResultDisplay } from "./components/ResultDisplay/ResultDisplay"

function App() {
  const [n, setN] = useState<number | null>(null)
  const [result, setResult] = useState<string | null>(null)


  return (
    <>
      <InputForm onSubmit={(num) => setN(num)} />
      {n !== null && <SeriesCalculatorComponent n={n} onResult={(res) => setResult(res)} />}
      { result && <ResultDisplay result={result} />}
    </>
  )
}

export default App
