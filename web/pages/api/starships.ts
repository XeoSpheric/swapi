// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {
    query: { name },
    method,
  } = req;
  req.query;
  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ q: req.query });
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
