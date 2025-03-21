import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Views/Home/Home'
import Product from './Views/Products/Product'
import News from './Views/News/News'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/proyects' element={<div />} />
        {/* <Route path='/contact' element={<div />} /> */}
        <Route path='/:name/:id' element={<Product />} />
        <Route path='/news' element={<News />} />
      </Route>
    </Routes>
  )
}

export default App