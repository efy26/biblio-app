'use client'
import styles from './Form.module.css';
import { useState } from 'react';
export default function FormControlle() {
    const [nom, setNom] = useState(''); // variable pour le champ de nom
    const [courriel, setCourrel] = useState(''); // variable  pour le champ courriel
    const handleNom = (event) => setNom(event.target.value); //Pour modifier le nom
    const handleCourriel = (event) => setCourrel(event.target.value); //pour modifier le courriel
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
        console.log(`Nom: ${nom}, Courriel: ${courriel}`); // Affichage du nom et courriel
    };
    return <>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>Nom:</label>
                <input
                    type="text"
                    name='nom'
                    value={nom}
                    onChange={handleNom}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name='courriel'
                    value={courriel}
                    onChange={handleCourriel}
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </>;
}
