import Menu from './components/Menu';
import Card from './component/Card';
import Voiture from '../public/image/voiture.png';
import './assets/home.css';

function Home() {
  const divStyle = {
    backgroundImage: `url(${Voiture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '1650px',
    height: '730px',  
    marginTop: '80px',
  };
  return (
     <>
      <Menu />
      <div style={divStyle}>
        {
          <div className='image'>
            <h2>Effectuer un recherche</h2>
            <div className='bas'>
              <div className='part'>
                <div className='sup'>
                  <p>Titre de l'annonce</p>
                  <input type='text' placeholder='Ecriver-ici'></input>
                </div>
                <div className='inf'>
                  <div>
                    <p>Prix min</p>
                    <input type='text' placeholder='Montant'></input>
                  </div>
                  <div>
                    <p>Prix max</p>
                    <input type='text' placeholder='Montant'></input>
                  </div>
                </div>
              </div>
              <div className='part'>
                <div className='sup'>
                  <p>Lieu</p>
                  <input type='text' placeholder='Choisir un lieu'></input>
                </div>
                <div className='inf'>
                  <div>
                    <p>Date min</p>
                    <input type='date' placeholder='date'></input>
                  </div>
                  <div>
                    <p>Date max</p>
                    <input type='date' placeholder='date'></input>
                  </div>
                </div>
              </div>
            </div>
            <button className='search'>Rechercher</button>
          </div>        
        }        
        <div className='content'>
          <h2>Decouvrez vos annonces</h2>
          <div className='card'>              
              <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;