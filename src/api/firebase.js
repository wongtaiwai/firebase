
import {getApps, getApp,initializeApp }from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN ,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app_length = getApps().length > 0; 

const app = app_length ? getApp() : initializeApp(firebaseConfig);


const ImageCollectionDB = getFirestore(app)
const ImageCollection = collection(ImageCollectionDB , "images")


export const  getDB  = async () =>{
  
    const ImageCollectionDeteal = await getDocs(ImageCollection)
    let result = []
    ImageCollectionDeteal.forEach( async (detail) =>{
        await result.push(detail.data());
    } )

    return result;

}