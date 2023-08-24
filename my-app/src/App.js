import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
import RenderingLists from './components/RenderingLists';
import Sidebar from "./components/Sidebar";
import Apps from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar /> 
      <Apps />
      <NavBarForm />
      <RenderingLists />

    </div>
  );
}

export default App;