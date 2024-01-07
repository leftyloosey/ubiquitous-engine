import { useQuery, gql } from '@apollo/client'

const query = gql`
  query ClientList {
    clientList {
      phone
      name
      email
      id
    }
  }
`

const SignUpList = () => {
  const { data } = useQuery(query)
  console.log(data)

  return <div>SignUp List</div>
}

export default SignUpList
