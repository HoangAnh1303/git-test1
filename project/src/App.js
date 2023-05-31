import './App.css';
import Navigation from './component/Navigation';
// import Main from './component/Main';
import Players from './Players';
import Footers from './Footer';
function App(){
    return(
<div className='App'>
<Navigation/>
{/* <Main/> */}
<Players/>
<Footers />
</div>

    );
}
export default App;