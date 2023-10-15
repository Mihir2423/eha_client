import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query {
    products {
      data {
        id
        attributes {
          name
          slug
          price
          original_price
          description
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($productId: ID) {
    product(id: $productId) {
      data {
        id
        attributes {
          rating
          Brand
          name
          price
          original_price
          description
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query Categories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_CATEGORY = gql`
  query Categories($categoryId: ID, $sortField: [String]) {
    category(id: $categoryId) {
      data {
        attributes {
          products(sort: $sortField) {
            data {
              id
              attributes {
                name
                price
                original_price
                description
                thumbnail {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_NEW_ARRIVALS = gql`
  query Products($filters: ProductFiltersInput, $sortField: [String]) {
    products(filters: $filters, sort: $sortField) {
      data {
        id
        attributes {
          name
          slug
          price
          updatedAt
          original_price
          description
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_NAME = gql`
  query Products($searchString: String!) {
    products(filters: { name: { containsi: $searchString } }) {
      data {
        id
        attributes {
          name
          slug
          price
          original_price
          description
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

// export const GET_PRODUCTS_Details = gql`
//   query GetProducts($categoryFilters: CategoryFiltersInput, $productFilters: ProductFiltersInput, $sortField: [String]) {
//     category(id: $categoryFilters.categoryId) {
//       data {
//         attributes {
//           products(sort: $sortField) {
//             data {
//               id
//               attributes {
//                 name
//                 price
//                 original_price
//                 description
//                 thumbnail {
//                   data {
//                     attributes {
//                       url
//                     }
//                   }
//                 }
//                 updatedAt
//                 slug
//               }
//             }
//           }
//         }
//       }
//     }
//     products(filters: $productFilters, sort: $sortField) {
//       data {
//         id
//         attributes {
//           name
//           price
//           original_price
//           description
//           thumbnail {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           updatedAt
//           slug
//         }
//       }
//     }
//   }
// `;
