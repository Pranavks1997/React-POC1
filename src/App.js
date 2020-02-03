import React, { Suspense } from 'react';
import './App.css';
import Loader from "./components/Loader";


const RoutesContainer = React.lazy(() => import("./RoutesContainer"));

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Suspense fallback={<Loader  />}>
        <RoutesContainer />
      </Suspense>
      {/* </header> */}
    </div>
  );
}

export default App;
