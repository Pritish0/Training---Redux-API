import logo from './logo.svg';
import './App.css';
import {ContextProvider} from './Store/Store';
import Counter from './Counter';

function App() {
  return (
    <ContextProvider>
      <div className='App'>
        <Counter/>
      </div>
    </ContextProvider>

  );
}

export default App;
