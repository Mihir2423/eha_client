import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authorize = async (credentials) => {
  // const { email, password } = credentials;

  if (!credentials.email || !credentials.password) {
    throw new Error("Please enter email and password");
  }

  const user = await prisma.User.findUnique({
    where: {
      email: credentials.email,
    },
  });

  if (!user) {
    throw new Error("No user found");
  }

  return user;
};

const handleSession = async ({ session }) => {
  try {
    console.log("session", session);

    const email = session?.user.email;
    if (!email) {
      console.error("email not found in session:", session);
      throw new Error("email not found.");
    }

    const userData = await prisma.User.findUnique({
      where: {
        email:email,
      },
    });

    if (!userData) {
      console.error("No user found");
      throw new Error("No user found");
    }

    return {
      ...session,
      user: {
        ...session.user,
        id: userData.id,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        
      },
    };

  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

const authOptions = {
  providers: [
    CredentialsProvider({
      // Correct import
      credentials: {
        username: { label: "Email", type: "email", placeholder: "someone@example.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: authorize,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    session: handleSession,
    jwt: async ({ token, user }) => ({
      ...token,
      email: user?.email,
      name: user?.name,
    }),
  },
};

export default NextAuth(authOptions);


