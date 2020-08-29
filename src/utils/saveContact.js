import { gql, GraphQLClient } from "graphql-request"

export const saveContactForm = async (values) => {
  const API_ENDPOINT = "https://api-eu-central-1.graphcms.com/v2/ckefebnku27i601z8amco7tmr/master"
  const API_ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE1OTg2OTI5MTAsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrZWZlYm5rdTI3aTYwMXo4YW1jbzd0bXIvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWVmZDhkMmItOTE0ZS00MjFkLWE0NDYtYWQ1ZDQ2NjM1NWM4IiwianRpIjoiY2tlZmdoY2F4Mm1weDAxdXpoYWI1NW85byJ9.zey2aQh93xNv8MxSOIoY-HyVg-I5kQaCta5_AeeOvgQl5ThEYCUDOIg_jk_AkbJP4xL25oIou2Iy3B0a8DmWY9DV57IZ4UnmysWypD6OTVNAZSvljAyxHSrFncuIRQc5qA19qXvz9WLoxHiK3Pgg4r7IRLAJY__GSHjZHFlo4a7wv5NweALwNgaWQ5J8O7H6jej2bZIJRGJNBNksV9ZU29rbdG8_-foVxgpEvGzT1UYrV9KbAxxIGS09UW4_tJkfJ2NUELnUet55aXxYDrqbBrJM2JSZGpIL89s8aSvTErEeiRkOD7chy4564LQJ_E-ASWkIOH5GWMNYNPF189Yb5z-HOSuO4eG8sl0mGNf7gtuyp3E8y7yv7Tf0NoQ459d2Kf5Fo_BnB9aBFJBOtp6G8Hj2FifQkuOx53AIF5hCxVaWBp1danit06nbPpVhxF042M1VzV4PGyyQ5RYbZk_Oe7wyiPWzCtNRcyFI2N0LPR5_eq0PK3DuW0zZgu95tdvsX2xmoHdIMzqfiLOUZaLEq437ugxUBlkcqW98744QVBG73h9W-JV7kHSlpyggBjgz0kNyS2lfZ-TtrI1BJTRiCeNIfy_FrdSkVZpB9wzyanmvA7SzLV1SWncZwDsfTV3acz_pcOcMrcMaXWrbkAwUEZIxea3JX-Jvha2aKjKRbhA"

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
