// // import { signIn } from "@/services/signin";
// import { signIn } from "next-auth/react";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       name: "Sign in with Email",
//       credentials: {
//         username: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         if (credentials == null) return null;
//         try {
//           const { user, jwt } = await signIn({
//             username: credentials.username,
//             password: credentials.password,
//           });
//           return { ...user, jwt };
//         } catch (error) {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     session: async ({ session, token }) => {
//       session.id = token.id;
//       session.jwt = token.jwt;
//       return Promise.resolve(session);
//     },
//     jwt: async ({ token, user }) => {
//       const isSignIn = user ? true : false;
//       if (isSignIn) {
//         token.id = user.id;
//         token.jwt = user.jwt;
//       }
//       return Promise.resolve(token);
//     },
//   },
// });

// Compare this snippet from pages/api/signup/index.js:
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"; // Correct import
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();

const authorize = async (credentials) => {
  // const { email, password } = credentials;

  if (!credentials.email ) {
    throw new Error("Please enter email and password");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: credentials.email,
    },
  });

  if (!user) {
    throw new Error("No user found");
  }

  return user;
};

const handleSession = async (session, user) => {
  const userData = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      email: true,
      username: true,
      phone: true,
    },
  });

  return {
    ...session,
    user: { ...session.user, ...userData },
  };
};

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
  },
};

export default NextAuth(authOptions);


