import axios from "axios";

const strapiUrl = `${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}`;

export async function signIn({ username, password }) {
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: username,
    password,
  });
  return res.data;
}
