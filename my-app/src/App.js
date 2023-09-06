import css from './App.module.css';
import ClassCounter from './components/ClassCounter';
import Clock from './components/Clock';
import Content from './components/Contens';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControlledFormHooks';
import HooksCounter from './components/HooksCounter';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import NavBarForm from './components/NavBarForm';
import RenderingLists from './components/RenderingLists';
import SearchBar from './components/SearchBar';
import Sidebar from "./components/Sidebar";
import Apps from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
{/*       <Sidebar />  */}
      <Apps />
      <NavBarForm />
{/*       <Clock />
      <RenderingLists />
      <LifeCyclesCDM />
      <LifeCyclesCDU />
      <LifeCyclesCWU /> */}
{/*       <ControlledForm />
      <SearchBar /> */}
{/*       <HooksCounter />
      <ClassCounter /> */}
      <ControlledFormHooks />
{/*       <Content /> */}

    </div>
  );
}

export default App;