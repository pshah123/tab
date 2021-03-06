import {
  commitMutation,
  graphql
} from 'react-relay/compat'

const mutation = graphql`
  mutation CreateNewUserMutation($input: CreateNewUserInput!) {
    createNewUser(input: $input) {
      user {
        id
        email
        username
      }
    }
  }
`

function commit (environment, userId, email, referralData, onCompleted, onError) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { userId, email, referralData }
      },
      onCompleted: (response) => {
        onCompleted(response)
      },
      onError: (err) => {
        onError(err)
      }
    }
  )
}

export default {commit}
