import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../prisma/client'

export default NextAuth({
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // Add other providers as needed
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
})