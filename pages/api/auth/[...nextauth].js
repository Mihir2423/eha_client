import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authorize = async (credentials) => {
  // console.log("Credentials:", credentials);

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

  const isValid = await bcrypt.compare(credentials.password, user.password);

  if (!isValid) {
    throw new Error("Invalid password.");
  }

  return user;
};

// const handleSession = async ({ session, user }) => {
//   try {
//     console.log("session", session);

//     const email = user?.email || session?.user?.email;

//     if (!email) {
//       console.error("email not found in session:", session);
//       throw new Error("email not found.");
//     }

//     const userData = await prisma.User.findUnique({
//       where: {
//         email: email,
//       },
//       select: {
//         id: true,
//         email: true,
//         phone: true,
//         profile:true,
//       },
//     });

//     if (!userData) {
//       console.error("No user found");
//       throw new Error("No user found");
//     }

//     return {
//       ...session,
//       user: {
//         ...session.user,
//         id: userData.id,
//         email: userData.email,
//         phone: userData.phone,
//         profile:userData.profile,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error;
//   }
// };

const handleSession = async ({ session, user }) => {
  const userData = await prisma.User.findUnique({
    where: { email: session.user.email },
    select: {
      username: true,
      email: true,
      firstName: true,
      lastName: true,
      phoneNumber: true,
      landlineNo: true,
      gender: true,
      dateOfBirth: true,
      age: true,
      // phone: true,
      // profile:true,
    }
  });

  return {
    ...session,
    user: {
      ...session.user,
      email: userData.email,
      username: userData.username,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phoneNumber: userData.phoneNumber,
      landlineNo: userData.landlineNo,
      gender: userData.gender,
      dateOfBirth: userData.dateOfBirth,
      age: userData.age,
      // phone: userData.phone,
      // profile:userData.profile,
      
    }
  };
};


const authOptions = {
  providers: [
    CredentialsProvider({
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
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    session: handleSession,
    jwt: async ({ token, user }) => ({
      ...token,
      email: user?.email,
      username: user?.username,
      firstName: user?.firstName,
      lastName: user?.lastName,
      phoneNumber: user?.phoneNumber,
      landlineNo: user?.landlineNo,
      gender: user?.gender,
      dateOfBirth: user?.dateOfBirth,
      age: user?.age,
      
      // phone: user?.phone,
      // id: user?.id,
    }),
  },
};

export default NextAuth(authOptions);