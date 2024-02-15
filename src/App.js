import logo from './logo.svg';
import './App.css';
import Stepper from './components/Stepper/Stepper';

function App() {
  return (
    <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
      <Stepper />
    </div>
  );
}

export default App;
