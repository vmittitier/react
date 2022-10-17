// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';

// styles css
import './App.css';
import Challenge from './components/Challenge';
function App() {
  return (
    <div className="App">
     <h1>Fundamentos React</h1>
     <FirstComponent />
     <TemplateExpressions/>
     <Challenge/>
    </div>
  );
}

export default App;
