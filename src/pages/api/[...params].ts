import type { NextApiRequest, NextApiResponse } from 'next';
import {
  ResourcesType,
  getCollection,
  getSingleDoc,
  Planet,
  Film,
  People,
  Starship,
  Vehicle,
  Species,
} from '../../utils';

export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
): void {
  const { params, search } = req.query;
  if (!params || !Array.isArray(params)) {
    res.status(404).end(`Path not found`);
    return;
  }

  const path = params[0] as ResourcesType;
  const id = params.length > 1 ? params[1] : null;

  if (req.method === 'GET') {
    switch (path) {
      case ResourcesType.Planets:
        if (id !== null) {
          getOne<Planet>(path, id, res);
          return;
        }
        getMany<Planet>(path, res);
        return;

      case ResourcesType.Films:
        if (id !== null) {
          getOne<Film>(path, id, res);
          return;
        }
        getMany<Film>(path, res);
        return;

      case ResourcesType.People:
        if (id !== null) {
          getOne<People>(path, id, res);
          return;
        }
        getMany<People>(path, res);
        return;

      case ResourcesType.Starships:
        if (id !== null) {
          getOne<Starship>(path, id, res);
          return;
        }
        getMany<Starship>(path, res);
        return;

      case ResourcesType.Vehicles:
        if (id !== null) {
          getOne<Vehicle>(path, id, res);
          return;
        }
        getMany<Vehicle>(path, res);
        return;

      case ResourcesType.Species:
        if (id !== null) {
          getOne<Species>(path, id, res);
          return;
        }
        getMany<Species>(path, res);
        return;

      default:
        res.status(404).end(`Path not found`);
        return;
    }
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

async function getOne<T>(
  path: string,
  id: string,
  res: NextApiResponse
): Promise<void> {
  const result = await getSingleDoc<T>(path, id);
  if (result.error) {
    res.status(result.code).json({ message: result.error.message });
    res.end();
    return;
  }
  res.status(result.code).json(result.data);
  res.end();
}

async function getMany<T>(path: string, res: NextApiResponse): Promise<void> {
  const result = await getCollection<T>(path);
  if (result.error) {
    res.status(result.code).json({ message: result.error.message });
    res.end();
    return;
  }
  if (result.data && Array.isArray(result.data)) {
    res.status(result.code);
    res.json(result.data);
    res.end();
    return;
  }
}

// if (search) {
//   let matches: any[] = [];
//   for (let i = 0; i < result.data.length; i++) {
//     if (result.data[i].name.includes(search as string)) {
//       matches.push(result.data[i]);
//     }
//   }
//   res.status(result.code);
//   res.json(matches);
//   res.end();
//   return;
// }
