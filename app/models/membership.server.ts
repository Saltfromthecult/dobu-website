

import { prisma } from "~/db.server";

export async function getMemberships() {
  return prisma.membership.findMany();
}