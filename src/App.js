import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form';
import './app.css'
function App() {
  return (
    <div>
      <Form/>
      <BmiScore/>
      <BmiList/>
    </div>
  );
};

export default App;
