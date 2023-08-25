import css from './App.module.css';
import Clock from './components/Clock';
import Content from './components/Contens';
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
      <Clock />
      <RenderingLists />
      <Content />
    </div>
  );
}

export default App;