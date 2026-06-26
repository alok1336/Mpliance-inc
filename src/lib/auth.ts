import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      id: "credentials",

      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const email =
          credentials.email as string;

        const password =
          credentials.password as string;

        const user =
          await prisma.user.findUnique({
            where: {
              email,
            },
            include: {
              dealerProfile: true,
            },
          });

        if (!user) return null;

        const valid =
          await bcrypt.compare(
            password,
            user.password
          );

        if (!valid) return null;

        return {
          id: user.id,
          email: user.email,
          role: user.role,

          dealerTier:
            user.dealerProfile?.tier,

          subscriptionExpiry:
            user.dealerProfile
              ?.subscriptionExpiry,
        };
      },
    }),

    Credentials({
      id: "dealer-credentials",

      name: "dealer-credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const email =
          credentials.email as string;

        const password =
          credentials.password as string;

        const user =
          await prisma.user.findUnique({
            where: {
              email,
            },
            include: {
              dealerProfile: true,
            },
          });

        if (!user) return null;

        if (
          user.role !== "DEALER"
        )
          return null;

        const valid =
          await bcrypt.compare(
            password,
            user.password
          );

        if (!valid) return null;

        return {
          id: user.id,
          email: user.email,
          role: user.role,

          dealerTier:
            user.dealerProfile?.tier,

          subscriptionExpiry:
            user.dealerProfile
              ?.subscriptionExpiry,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;

        token.role = user.role;

        token.dealerTier =
          user.dealerTier;

        token.subscriptionExpiry =
          user.subscriptionExpiry;
      }

      return token;
    },

    async session({
      session,
      token,
    }) {
      session.user.id =
        token.userId as string;

      session.user.role =
        token.role as string;

      session.user.dealerTier =
        token.dealerTier as string;

      session.user.subscriptionExpiry =
        token.subscriptionExpiry as Date;

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret:
    process.env.NEXTAUTH_SECRET,
});