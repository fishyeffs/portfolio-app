import logo from './resources/logo.svg';
import './App.css';
import ContactForm from './views/ContactForm';
import MenuBar from './components/MenuBar';


function App() {
  return (
    <div className="App">
      <MenuBar />
      <ContactForm />
    </div>
  );
}

export default App;
