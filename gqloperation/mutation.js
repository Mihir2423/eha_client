import { gql } from "@apollo/client"

export const SIGNUP=gql`
mutation Signup($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
    user {
      email
      confirmed
      blocked
      id
      username
    }
  }
}
`
export const LOGIN=gql`
mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt user {
      username
      email
    }
  }
}
`
export const FORGOT_PASSWORD=gql`
mutation Mutation($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
`

// export const RESET_PASSWORD= gql`
//  mutation resetPassword(password: $password, passwordConfirmation: $passwordConfirmation, code: $code) {
//   jwt
//   user {
//     email
//     confirmed
//     username
//   }
// }
// `
export const UPDATE_USER=gql`
mutation UpdateUser($input: updateUserInput) {
  updateUser(input: $input) {
    user {
      username
      email
      confirmed
      blocked
      id
    }
  }
}
`
