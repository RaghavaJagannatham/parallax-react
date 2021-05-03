import react , { Suspense, lazy} from 'react';
import './App.css';
import Header from './Header';

const  Contact = lazy(() => import ("./Contact"));
const  About = lazy(() => import ("./About"));
const  Files = lazy(() => import ("./Files"));


function App() {
  return (
    <div className="App">
      <Header />

      <Suspense fallback={<h2>Lazy Loading wait</h2>}>


        
        <About />
        <Files />
        <Contact />
        

      </Suspense>
      
     
      
        
      
      
    </div>
  );
}

export default App;