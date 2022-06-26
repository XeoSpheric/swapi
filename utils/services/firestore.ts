import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { store } from './firebase';

async function getCollection<Type>(path: string) {
  const planets = await getDocs(collection(store, path)).catch((err) => {
    return new Error(...err);
  });
  return {
    data: !(planets instanceof Error)
      ? planets.docs.map((d) => d.data() as Type)
      : null,
    error: !(planets instanceof Error) ? null : planets,
    code: !(planets instanceof Error) ? 200 : 403,
  };
}

async function getSingleDoc<Type>(path: string, id: string) {
  const planet = await getDoc(doc(store, path, id)).catch((err) => {
    return new Error(...err);
  });
  return {
    data: !(planet instanceof Error) ? (planet.data() as Type) : null,
    error: !(planet instanceof Error) ? null : planet,
    code: !(planet instanceof Error) ? 200 : 403,
  };
}

export { getCollection, getSingleDoc };
