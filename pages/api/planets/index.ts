// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Planet } from '../../../classes';
import { getPlanets } from '../../../services';

export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      // Get data from your database
      getPlanets().then((result) => {
        if (result.error) {
          res
            .status(result.code)
            .json({ message: result.error.message, cause: result.error.cause });
          res.end();
          return;
        }
        if (result.data && Array.isArray(result.data)) {
          if (req.query.search) {
            let matches: Planet[] = [];
            for (let i = 0; i < result.data.length; i++) {
              if (result.data[i].name.includes(req.query.search as string)) {
                matches.push(result.data[i]);
              }
            }
            res.status(result.code);
            res.json(matches);
            res.end();
            return;
          }
          res.status(result.code);
          res.json(result.data);
          res.end();
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
