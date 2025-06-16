import './App.css';
import Count from './components/Exercise1';
import ControlledInputField from './components/Exercise2';
import ToggleVisibility from './components/Exercise3';
import TodoList from './components/Exercise4';
import ColorSwitcher from './components/Exercise5';
import SearchFilter from './components/Exercise6';
import DragAndDropList from './components/Exercise7';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <h1>Ex1</h1>
      <Count />
      <h1>Ex2</h1>
      <ControlledInputField />
      <h1>Ex3</h1>
      <ToggleVisibility />
      <h1>Ex4</h1>
      <TodoList/>
      <h1>Ex5</h1>
      <ColorSwitcher/>
      <h1>Ex6</h1>
      <SearchFilter/>
      <h1>Ex7</h1>
      <DragAndDropList/>
    </>
  );
}

export default App;
