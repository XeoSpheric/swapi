import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  ResourcesType,
  Planet,
  Film,
  People,
  Starship,
  Vehicle,
  Species,
  Stringify,
} from '../../utils';
const prisma = new PrismaClient();

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
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
          const data = await prisma.planet.findFirst({
            where: { id: Number(id) },
          });
          res.status(200).json(Stringify(data));
          return;
        }
        if (search) {
          const data = await prisma.planet.findMany({
            where: { name: { contains: search as string } },
          });
          res.status(200).json(Stringify(data));
          return;
        }
        const data = await prisma.planet.findMany();
        res.status(200).json(Stringify(data));
        return;

      default:
        res.status(404).end(`Path not found`);
        return;
    }
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
