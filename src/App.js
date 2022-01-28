import {Navbar} from './components/navbar/Navbar';
import {One} from './components/part_1/One';
import {Two} from './components/part_2/Two';
import {Three} from './components/part_3/Three';
import {Four} from './components/part-4/Four';
import {Five} from './components/part_5/Five';
import {Six} from './components/part_6/Six';
import {Seven} from './components/part_7/Seven';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <One />
      <Two />
      <Three />
     <Four/>
      <Five />
      <Six />
      <Seven />
    </div>
  );
}

export default App;
