import type { NextApiRequest, NextApiResponse } from 'next';
import { Planet } from '../../../resources';
import { getSingleDoc } from '../../../resources';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      // Get data from your database
      getSingleDoc<Planet>('planets', req.query.planetId as string).then(
        (result) => {
          if (result.error) {
            console.log(result);
            res.status(result.code).json({ message: result.error.message });
            res.end();
            return;
          }
          res.status(result.code).json(result.data);
          res.end();
        }
      );
      break;
    // case 'PUT':
    //   // Update or create data in your database
    //   break;
    default:
      // res.setHeader('Allow', ['GET', 'PUT']);
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
