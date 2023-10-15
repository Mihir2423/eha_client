import { ApolloClient, InMemoryCache } from "@apollo/client";
const url=`${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}`;

const apolloClient = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
