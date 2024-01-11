import { Routes, Route } from 'react-router-dom'
import SignUpList from './pages/SignUpList'
// import Home from './pages/Home'
import Practice from './pages/Practice'
import Practice2 from './pages/Practice2'
import Merch from './pages/Merch'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<TheMap />} /> */}
        <Route path='/' element={<Practice2 />} />
        {/* <Route index element={<Home />} /> */}
        <Route path='/signuplist' element={<SignUpList />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/practice2' element={<Practice2 />} />
        <Route path='/merch' element={<Merch />} />
        {/* <Route path='*' element={<Home />} /> */}
        <Route path='*' element={<Practice2 />} />
      </Routes>
    </>
  )
}

export default App
