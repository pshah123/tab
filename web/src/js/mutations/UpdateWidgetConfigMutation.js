import {
  commitMutation,
  graphql
} from 'react-relay/compat'

const mutation = graphql`
  mutation UpdateWidgetConfigMutation($input: UpdateWidgetConfigInput!) {
    updateWidgetConfig(input: $input) {
      widget {
        config
      }
    }
  }
`

function commit (environment, user, widget, config,
  onCompleted = () => {}, onError = () => {}) {
  const userId = user.id
  const widgetId = widget.id

  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { userId, widgetId, config }
      },
      onCompleted,
      onError
    }
  )
}

export default {commit}
