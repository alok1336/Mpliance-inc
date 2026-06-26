import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      dealerTier?: string | null;
      subscriptionExpiry?: Date | null;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
    dealerTier?: string | null;
    subscriptionExpiry?: Date | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    role: string;
    dealerTier?: string | null;
    subscriptionExpiry?: Date | null;
  }
}