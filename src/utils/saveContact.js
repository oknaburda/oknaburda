import { gql, GraphQLClient } from "graphql-request"

export const saveContactForm = async (values) => {
  const API_ENDPOINT = process.env.GRAPH_CMS_ENDPOINT
  const API_ACCESS_TOKEN = process.env.GRAPH_CMS_ACCESS_TOKEN

  const graphCmsClient = new GraphQLClient(
    API_ENDPOINT,
    {
      headers: {
        authorization: `Bearer ${API_ACCESS_TOKEN}`
      }
    }
  )

  const query = gql`
      mutation createContactForm($data: ContactFormCreateInput!) {
          createContactForm(data: $data) {
              name,
              email,
              phone,
              companyName,
              message,
              acceptedTerms,
          }
      }
  `

  const data = await graphCmsClient.request(query, {
    data: {
      name: values.firstLastName,
      email: values.email,
      phone: values.phone,
      companyName: values.companyName,
      message: values.message,
      acceptedTerms: values.acceptRules,
    }
  })

  return !!data;
}
