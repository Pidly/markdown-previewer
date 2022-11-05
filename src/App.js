import './App.css';
import MarkdownViewer from './components/MarkdownViewer';
import MarkdownText from './components/MarkdownText';

function App() {
  return (
    <div className="App">
      <div className='component-containers'>
        <MarkdownText/>
        <MarkdownViewer/>
      </div>
    </div>
  );
}

export default App;
