import assert from 'assert';
import { getDocs, collection } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Planet } from '../../../classes';
import { getPlanets, store } from '../../../services';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      // Get data from your database
      getPlanets(req.query.planetId as string).then((result) => {
        if (result.error) {
          console.log(result);
          res
            .status(result.code)
            .json({ message: result.error.message, cause: result.error.cause });
        }
        res.status(result.code).json(result.data);
      });
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
