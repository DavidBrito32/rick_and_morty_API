import { HooksProvider } from "./context/hooksContext";
import Router from "./routes/Router";


const App = () => {

  return (
    <>
      <HooksProvider>
        <Router />
      </HooksProvider>
    </>
  )
}

export default App
