'use client'
import styles from './Form.module.css'
import { useForm } from 'react-hook-form'
export default function FormHook() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            nom: '',
            courriel: ''
        }
    });
    const nom = watch('nom');

    function onSubmit(data) {
  console.log("Formulaire soumis :", data);
}
    return <>
        <form className={styles.form}
            onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nom:
                <input
                    type="text"
                    {...register("nom",
                        {
                            required: 'Champ obligatoire',
                            minLength: { value: 4, message: "min 4 caractères" }
                        })
                    }
                    placeholder='votre nom' />
                <div className={styles.erreur}>{errors.nom?.message}</div>
            </label>
            <div>Nom : {nom}</div>
            <label>
                Courriel:
                <input
                    type="email"
                    {...register("courriel",
                        {
                            required: 'Champ obligatoire',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Courriel non valide'
                            }
                        })
                    }
                    placeholder='votre courriel'
                />
                <div className={styles.erreur}>{errors.courriel?.message}</div>
            </label>
            <button type="submit">Envoyer</button>
        </form>
    </>
}
