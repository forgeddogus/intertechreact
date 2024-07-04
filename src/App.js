import './App.css';
import Navbar from './component/navBar';
import Menu from './component/Menu.js';
import Card from './component/Card.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Menu>
                <h1>Card Content</h1>
                <p>This is the content inside the Menu.</p>
          
                <Card>
                    <h1>Card Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
                <Card>
                    <h1>Card Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
                <Card>
                    <h1>Card Content</h1>
                    <p>This is the content inside the card.</p>
                </Card>
      </Menu>
    </div>
  );
}

export default App;
