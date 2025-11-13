import FormNonControlle from "./FormNonControlle"
import FormControlle from "./FormControlle"
import FormHook from "./FormHook"
export default function Contact () {
    return <>
        <p>Contact</p>

        <h1>Formulaire non contrôlé</h1>
        <FormNonControlle/>

        <h1>Formulaire contrôlé</h1>
        <FormControlle/>

        <h1>Formulaire avec Hook</h1>
        <FormHook/>
    </>
}