import styled from 'styled-components'
import { TbMessages } from 'react-icons/tb'
import { BiHomeAlt } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'

import Logo from '../template/Logo'
import ProfileImg from '../template/ProfileImg'

const HeaderStl = styled.header`
  background-color: #ffffff;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.2);
  display: flex;
  padding-block: auto;
  height: 4rem;
`
const ProfileUser = styled.div`
  margin-block: auto;
  display: flex;
  justify-content: center;
  margin-inline: 1rem;
`

const NavOptions = styled.nav`
  margin-block: auto;
  display: flex;
  list-style: none;
  gap: 50px;
  margin-inline: auto;
`
const ShowYear = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-block: auto;
  margin-inline: 1rem;
`

const BarButtons = styled.div`
  margin-block: auto;
  margin-inline: 1rem;
  display: flex;
  gap: 1rem;

  button {
    background-color: transparent;
    border: none;
    svg {
      color: rgb(0, 0, 0, 0.9);
      width: 1.3rem;
      height: 1.3rem;
      -webkit-transition: 0.3s;
      &:hover {
        color: rgb(0, 0, 0, 0.5);
      }
    }
  }
`



export default function Header() {
  return (
    <HeaderStl>
      <Logo />

      <ShowYear>4 ano a</ShowYear>

      <NavOptions>
        <li>Turmas</li>
        <li>Notas</li>
        <li>Observações</li>
        <li>Desempenho</li>
      </NavOptions>

      <BarButtons>
        <button>
          <TbMessages />
        </button>

        <button>
          <IoIosNotificationsOutline />
        </button>

        <button>
          <BiHomeAlt />
        </button>
      </BarButtons>

      <ProfileUser>
        <ProfileImg width="45rem" height="45rem" />
      </ProfileUser>
    </HeaderStl>
  )
}
