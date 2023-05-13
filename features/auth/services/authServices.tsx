import { signInWithEmailAndPassword, signOut as firebaseSignOut, getAuth, setPersistence, 
    browserSessionPersistence, UserCredential } from "firebase/auth"
import { FirebaseError } from "firebase/app";
import SignInError from '../models/errors/SignInError';
import '@/config/firebase.config'

const auth = getAuth()

const signIn = (email: string, password: string) : Promise<UserCredential> => 
    new Promise(async(resolve, reject) =>{
    try {
        await setPersistence(auth, browserSessionPersistence)
        const result: UserCredential = await signInWithEmailAndPassword(auth, email, password);
        return resolve(result)
    } catch (e) {
        console.warn(e)

        if(e instanceof FirebaseError)
        {
            return reject(new SignInError(e.code,loadMessageByErrorCode(e.code)))
        } 

        return reject(new SignInError("damo/unknown","Error desconocido. Favor de contactar a sus administrador."))
    }
})

const signOut = (): Promise<void> => 
    new Promise(async (resolve, reject) => {
        try {
            await firebaseSignOut(auth)
            return resolve()
        } catch(error) {
            console.error(error)
            return reject('Error al cerrar sesión. Favor de contactar a sus administrador.')
        }
    })

function loadMessageByErrorCode(code: string): string {
    switch (code) {
        case "auth/user-not-found":
            return "Usuario o contraseña invalida."
        case "auth/wrong-password":
            return "Usuario o contraseña invalida."
        case "auth/too-many-requests":
            return "Ha excedido el numero de intentos. Intente mas tarde."
        default:
            return "Error desconocido. Favor de contactar a sus administrador."
    }
}

export { signIn, signOut }
