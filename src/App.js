import './App.css';
import Panel from './designer/Panel';
import Popover from './designer/popover/Popover';
import { PopoverProvider } from './designer/popover/PopoverContext';
import Uppernavbar from './Uppernavbar';
function App() {
  return (
    <div className="App">
          <PopoverProvider>
          <Uppernavbar />
          <Panel />
          <Popover></Popover>
        </PopoverProvider>

      
    </div>
  );
}

export default App;
