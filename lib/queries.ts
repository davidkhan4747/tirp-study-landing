import { gql } from "@apollo/client"

export const GET_COURSES_PUBLIC = gql`
  query coursesPulished {
    courses {
      id
      title
      description
      price
      imageUrl
      isPublished
      enrollmentLimit
      instructor {
        id
        name
        email
        __typename
      }
      instructorId
      createdAt
      updatedAt
      __typename
    }
  }
`
