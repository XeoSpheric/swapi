import type { NextApiRequest, NextApiResponse } from 'next';
import type { Planet } from '../../../classes';

export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<Planet>
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      fetch('https://swapi.dev/api/planet/' + id)
        .then((res) => res.json())
        .then((data) => {
          res.status(200).json(data);
        });
      break;
    case 'PUT':
      // Update or create data in your database
      // res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
