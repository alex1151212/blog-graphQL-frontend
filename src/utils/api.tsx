import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export const api = {
  mutation: {
    login: gql`
      mutation Mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `,
    signUp: gql`
      mutation Mutation($name: String!, $email: String!, $password: String!) {
        signUp(name: $name, email: $email, password: $password) {
          email
          name
        }
      }
    `,
    updateUserInfo: gql`
      #input (name,age)

      mutation Mutation($input: UpdateMyInfoInput!) {
        updateMyInfo(input: $input) {
          name
        }
      }
    `,
    addFriend: gql`
      mutation Mutation($userId: ID!) {
        addFriend(userId: $userId) {
          _id
        }
      }
    `,
    addPost: gql`
      #input (title,body)

      mutation Mutation($input: AddPostInput!) {
        addPost(input: $input) {
          _id
        }
      }
    `,
    likePost: gql`
      mutation Mutation($postId: ID!) {
        likePost(postId: $postId) {
          _id
        }
      }
    `,
    deletePost: gql`
      mutation Mutation($postId: ID!) {
        deletePost(postId: $postId) {
          _id
        }
      }
    `,
  },
  query: {},
};
