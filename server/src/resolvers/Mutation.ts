export const Mutation = {
  async signup(parent, args, context, info) {
    const user = await context.prisma.createUser({
      ...args
    })

    return user
  }
}
