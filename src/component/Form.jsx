import Button from './Button';
import "../assets/form.css";

function Form(){
    return(
        <>
            <div className='contain'>
                <h2>Filtrer les résultats</h2>
                <div>
                    <h4>Titre de l'annonce</h4>
                    <p><input type="text" placeholder='Ecrivez ici' name='' /></p>
                </div>
                <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div style={{width: '47%'}}>
                        <h4>Prix Min</h4>
                        <p><input type="text" placeholder='Montant' name='' /></p>
                    </div>
                    <div style={{width: '47%'}}>
                        <h4>Prix Max</h4>
                        <p><input type="text" placeholder='Montant' name='' /></p>
                    </div>
                </div>
                <div>
                    <h4>Lieu</h4>
                    <p><select name=''>
                        <option value="">Choisir un Lieu</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select></p>
                </div>
                <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div style={{width: '47%'}}>
                        <h4>Date Min</h4>
                        <p><input type="date" name='' /></p>
                    </div>
                    <div style={{width: '47%'}}>
                        <h4>Date Max</h4>
                        <p><input type="date" name='' /></p>
                    </div>
                </div>
                <div>
                    <h4>Modele</h4>
                    <p><select name=''>
                        <option value="">Choisir un modele</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select></p>
                </div>
                <div>
                    <h4>Marque</h4>
                    <p><select name=''>
                        <option value="">Choisir une marque</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select></p>
                </div>
                <div>
                    <h4>Boite de vitesse</h4>
                    <p><select name=''>
                        <option value="">Choisir une boite de vitesse</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select></p>
                </div>
                <div>
                    <h4>Type d'énergie</h4>
                    <p><select name=''>
                        <option value="">Choisir un type d'énergie</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select></p>
                </div>
                <Button text="Filtrer" />
            </div>
        </>
    )
}

export default Form;
