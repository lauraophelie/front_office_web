import Voiture from '../..//public/image/voiture.png';
import '../assets/card.css';
function Card(){  
    return(
        <>
            <div className="card">
                <div className="sary">
                    <img src={Voiture}></img>
                </div>                    
                <div>
                    <div className='decouvert'>
                        <h4>titre vos annonces</h4>
                        <p className='text_'>coucou hvuyvh iv</p>
                    </div>
                    <div className='detail'>
                        <div className="prix">Ar 1000</div>
                        <div className="details">detail</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;