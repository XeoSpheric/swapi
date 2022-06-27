import { createServer } from '@graphql-yoga/node';
import { getCollection, getSingleDoc, Planet } from '@/utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const typeDefs = /* GraphQL */ `
  type Query {
    planets: [Planet!]!
    planet(id: ID, name: String): Planet
  }
  type Planet {
    climate: String
    created: String
    diameter: String
    edited: String
    gravity: String
    name: String!
    orbital_period: String
    rotation_period: String
    surface_water: String
    terrain: String
    url: String
  }
`;

const resolvers = {
  Query: {
    async planets() {
      const data = await prisma.planet.findMany();
      return data ? data : [];
    },
    async planet(_: any, args: { id: number; name: string }) {
      if (!args.id && !args.name) return { name: 'No planet found' };
      const where =
        args.name !== undefined ? { name: args.name } : { id: Number(args.id) };
      const data = await prisma.planet.findFirst({
        select: { name: true },
        where,
      });
      return data ? data : {};
    },
  },
};

const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
  // graphiql: false // uncomment to disable GraphiQL
});

export default server;
