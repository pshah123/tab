/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule DashboardViewQuery.graphql
 * @generated SignedSource<<40209ff0692ed5f12872afbfd65c9e65>>
 * @relayHash c92f2f8b8058f951289b16dd605aba0a
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query DashboardViewQuery(
  $userId: String!
) {
  app {
    ...DashboardContainer_app
    id
  }
  user(userId: $userId) {
    ...DashboardContainer_user
    id
  }
}

fragment DashboardContainer_app on App {
  ...BackgroundImagePickerContainer_app
  ...DonateVcContainer_app
}

fragment DashboardContainer_user on User {
  ...UserDisplayContainer_user
  ...UserBackgroundImageContainer_user
  ...VcUserContainer_user
  ...BackgroundImagePickerContainer_user
  ...DonateVcContainer_user
}

fragment UserDisplayContainer_user on User {
  id
  username
  email
}

fragment UserBackgroundImageContainer_user on User {
  backgroundImage {
    id
    name
    url
  }
}

fragment VcUserContainer_user on User {
  id
  vcCurrent
  vcAllTime
  level
  heartsUntilNextLevel
}

fragment BackgroundImagePickerContainer_user on User {
  id
}

fragment DonateVcContainer_user on User {
  id
  vcCurrent
}

fragment BackgroundImagePickerContainer_app on App {
  backgroundImages(first: 20) {
    edges {
      node {
        id
        name
        url
      }
    }
  }
}

fragment DonateVcContainer_app on App {
  charities(first: 20) {
    edges {
      node {
        id
        name
        category
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "userId",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardViewQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "App",
        "name": "app",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "DashboardContainer_app",
            "args": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "DashboardContainer_user",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "DashboardViewQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "userId",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "DashboardViewQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "App",
        "name": "app",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 20,
                "type": "Int"
              }
            ],
            "concreteType": "BackgroundImageConnection",
            "name": "backgroundImages",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "BackgroundImageEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "BackgroundImage",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "url",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "backgroundImages{\"first\":20}"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 20,
                "type": "Int"
              }
            ],
            "concreteType": "CharityConnection",
            "name": "charities",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "CharityEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Charity",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "category",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "charities{\"first\":20}"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "username",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "email",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "name": "backgroundImage",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "vcCurrent",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "vcAllTime",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "level",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "heartsUntilNextLevel",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query DashboardViewQuery(\n  $userId: String!\n) {\n  app {\n    ...DashboardContainer_app\n    id\n  }\n  user(userId: $userId) {\n    ...DashboardContainer_user\n    id\n  }\n}\n\nfragment DashboardContainer_app on App {\n  ...BackgroundImagePickerContainer_app\n  ...DonateVcContainer_app\n}\n\nfragment DashboardContainer_user on User {\n  ...UserDisplayContainer_user\n  ...UserBackgroundImageContainer_user\n  ...VcUserContainer_user\n  ...BackgroundImagePickerContainer_user\n  ...DonateVcContainer_user\n}\n\nfragment UserDisplayContainer_user on User {\n  id\n  username\n  email\n}\n\nfragment UserBackgroundImageContainer_user on User {\n  backgroundImage {\n    id\n    name\n    url\n  }\n}\n\nfragment VcUserContainer_user on User {\n  id\n  vcCurrent\n  vcAllTime\n  level\n  heartsUntilNextLevel\n}\n\nfragment BackgroundImagePickerContainer_user on User {\n  id\n}\n\nfragment DonateVcContainer_user on User {\n  id\n  vcCurrent\n}\n\nfragment BackgroundImagePickerContainer_app on App {\n  backgroundImages(first: 20) {\n    edges {\n      node {\n        id\n        name\n        url\n      }\n    }\n  }\n}\n\nfragment DonateVcContainer_app on App {\n  charities(first: 20) {\n    edges {\n      node {\n        id\n        name\n        category\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
