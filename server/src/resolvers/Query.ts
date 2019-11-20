import { prisma } from '../generated/prisma-client'

export const Query = {
  users(parent, args, context, info) {
    return prisma.users()
  }
}
