import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import Apps from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar /> 
      <Apps />

    </div>
  );
}

export default App;