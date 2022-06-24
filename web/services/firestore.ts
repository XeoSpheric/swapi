import { collection, getDocs } from 'firebase/firestore';
import { Planet } from '../classes';
import { store } from './firebase';

const getPlanets = async (id: string | null = null) => {
  const planets = await getDocs(collection(store, 'planets')).catch((err) => {
    return new Error(...err);
  });
  if (id !== null && !(planets instanceof Error)) {
    const match = planets.docs.findIndex((doc) => doc.id === id);
    return {
      data: match >= 0 ? (planets.docs[match].data() as Planet) : null,
      error: match >= 0 ? null : new Error('Planet not found'),
      code: !(planets instanceof Error) ? 200 : 403,
    };
  }
  return {
    data: !(planets instanceof Error)
      ? planets.docs.map((d) => d.data() as Planet)
      : null,
    error: !(planets instanceof Error) ? null : planets,
    code: !(planets instanceof Error) ? 200 : 403,
  };
};

export { getPlanets };
