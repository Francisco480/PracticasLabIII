import './App.css'
import beers from './components/beers/Beers';
import BeersCount from './components/beersCount/BeersCount';
import BeerStyles from './components/beerStyles/BeerStyles';
import Availables from './components/availables/Availables';
import List from './components/list/List';

function App() {
  

  return (
    <>
      <div>   
      <List beers={beers}/>
      <Availables beers={beers}/>
      <BeersCount beers={beers}/>
      <BeerStyles beers={beers}/>
      </div>
      
    </>
  )
}

export default App
