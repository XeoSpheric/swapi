// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Planet } from '../../../classes';
import { getPlanets } from '../../../services';

type Data = {
  name: string;
};

export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<Planet[] | Planet | string>
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      // Get data from your database
      getPlanets().then((result) => {
        if (result.error) {
          res.status(result.code).json(result.error.message);
        }
        if (result.data && Array.isArray(result.data)) {
          if (req.query.search) {
            let matches: Planet[] = [];
            for (let i = 0; i < result.data.length; i++) {
              if (result.data[i].name.includes(req.query.search as string)) {
                matches.push(result.data[i]);
              }
            }
            res.status(result.code).json(matches);
          }
          res.status(result.code).json(result.data);
        }
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
