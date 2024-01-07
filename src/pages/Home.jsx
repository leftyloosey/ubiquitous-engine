import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      <p>
        <Link to='/signuplist'>SignUp</Link>
      </p>
      <p>
        <Link to='/practice'>Practice</Link>
      </p>
    </div>
  )
}

export default Home
