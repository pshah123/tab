import {
  createFragmentContainer,
  graphql
} from 'react-relay/compat'

import Dashboard from './DashboardComponent'

export default createFragmentContainer(Dashboard, {
  app: graphql`
    fragment DashboardContainer_app on App {
      ...MoneyRaisedContainer_app
      ...UserMenuContainer_app
    }
  `,
  user: graphql`
    fragment DashboardContainer_user on User {
      id
      ...WidgetsContainer_user
      ...UserBackgroundImageContainer_user
      ...UserMenuContainer_user
      ...LogTabContainer_user
    }
  `
})
