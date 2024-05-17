
import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/SideBar'

import { Container } from './styles'

import LogoImg from '../../assets /logo.svg' 

export default function Main() {
  return (
    <Container>
      <Sidebar />
        <section>
          <img src={LogoImg}  />
          <Outlet />  
        </section>
    </Container>
  )
}
