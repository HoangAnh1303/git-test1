import './App.css';
import Navigation from './component/Navigation';
// import Main from './component/Main';
import Players from './Players';
function App(){
    return(
<div className='App'>
<Navigation/>
{/* <Main/> */}
<Players/>
</div>

    );
}
export default App;