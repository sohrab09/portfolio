import './App.css';
import MyNavbar from './components/my-navbar/my-navbar.components';
import MyTitleMessage from './components/title-message/title-message.component';
import "./App.css";
import MyCarousal from './components/my-carousal/my-carousal.component';
function App() {
  return (
    <div className="App">
      <MyCarousal/>
      <MyTitleMessage />
      <MyNavbar/>
    </div>
  );
}

export default App;
