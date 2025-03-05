import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Views/Home/Home'
import Product from './Views/Products/Product'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/proyects' element={<div />} />
        <Route path='/contact' element={<div />} />
        <Route path='/product/:name' element={<Product />} />
      </Route>
    </Routes>
  )
}

export default App


        {/* <Route path={`/colaboradores`} element={<Partners />} /> */}
        {
          /* <Route path={`/colaborador/:user/:idPartner`} element={<Pack />} />
        <Route path={`/politicas-privacidad`} element={<PrivacyPolicy />} />
        <Route path={`/canal-etico`} element={<EthicsChannel />} />
        <Route path={`/politicas-cookies`} element={<Cookies />} />
        <Route path={`/login`} element={<ProtectedRoute requiresAuth={false}><Login /></ProtectedRoute> } />
        <Route path={`/registro`} element={<ProtectedRoute requiresAuth={false}><Register /></ProtectedRoute>} />
        <Route path={`/recuperar-password`} element={<ProtectedRoute requiresAuth={false}><Forgot /></ProtectedRoute>} />
        <Route path={`/verifica-codigo`} element={<ProtectedRoute requiresAuth={false}><VerifyToken /></ProtectedRoute>} />
        <Route path={`/nueva-contraseña`} element={<ProtectedRoute requiresAuth={false}><CreatePassword /></ProtectedRoute>} />
*/
          {
            /** PROTECTED ROUTE */
          }
          /*      <Route path={'/perfil'} element={<ProtectedRoute requiresAuth={true}><Dashboard /></ProtectedRoute>} />
        <Route path={'/packs'} element={<ProtectedRoute requiresAuth={true}><Packs /></ProtectedRoute>} />
        <Route path={'/negocio'} element={<ProtectedRoute requiresAuth={true}><Bussiness /></ProtectedRoute>} />
        <Route path={'/menu'} element={<ProtectedRoute requiresAuth={true}><Menu /></ProtectedRoute>} />
        <Route path={'/mis-packs-vendidos'} element={<ProtectedRoute requiresAuth={true}><SoldPack /></ProtectedRoute>} />
        <Route path={`/mis-packs-vendidos/:user/:idUser`} element={<ProtectedRoute requiresAuth={true}><UserPacks /></ProtectedRoute>} /> */
        }

        {/** ERROR ROUTE */}
        {/*  <Route path={`*`} element={<NotFound />} /> */}