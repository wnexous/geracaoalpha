import styled from 'styled-components'
import { TbMessages } from 'react-icons/tb'
import { BiHomeAlt } from 'react-icons/bi'
import { MdNotificationsNone } from 'react-icons/md'
import { Link } from 'react-router-dom'

import Logo from '../template/Logo'
import ProfileImg from '../template/ProfileImg'

const HeaderStl = styled.header`
  background-color: #ffffff;
  box-shadow: 1px 1px 4px rgb(0, 0, 0, 0.1);
  display: flex;
  padding-block: auto;
  height: 3rem;
`
const ProfileUser = styled.div`
  display: flex;
  margin-block: auto;
  justify-content: center;
  margin-inline: 1rem;
  margin-right: 1.7rem;
  padding: 0.02rem;
  border-radius: 2rem;
  -webkit-transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 75%;
  }
`

const NavOptions = styled.nav`
  margin-block: auto;
  display: flex;
  list-style: none;
  gap: 50px;
  margin-inline: auto;

  li {
    a {
      -webkit-transition: 0.3s;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.7);

      &:after {
        display: block;

        margin-inline: auto;

        content: '';
        height: 2px;
        width: 0px;
        transition: 0.4s ease-out;
        transform: scale(0);
        background-color: #f991f4;
      }
      &:hover::after {
        background-color: #03a5f9;
        transform: scale(1);
        width: 100%;
      }
    }
  }
`
const ShowYear = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  margin-block: auto;
  margin-inline: 0.4rem;
  color: rgb(0, 0, 0, 0.77);
`

const BarButtons = styled.div`
  margin-block: auto;
  margin-inline: 0.7rem;
  display: flex;
  gap: 1rem;

  button {
    cursor: pointer;
    margin-block: auto;
    background-color: transparent;
    border: none;
    svg {
      margin-block: auto;
      color: rgb(0, 0, 0, 0.77);
      width: 1.3rem;
      height: 1.3rem;
      -webkit-transition: 0.3s;
      &:hover {
        color: rgb(0, 0, 0, 0.5);

      }
    }
  }
`

const CentralizeLogo = styled.div`
  margin-block: auto;
  cursor: pointer;
`

export default function Header() {
  return (
    <HeaderStl>
      <CentralizeLogo>
        <Logo />
      </CentralizeLogo>

      <ShowYear>4 ano a</ShowYear>

      <NavOptions>
        <li>
          <Link to="">Turmas</Link>
        </li>
        <li>
          <Link>Notas</Link>
        </li>
        <li>
          <Link>Observações</Link>
        </li>
        <li>
          <Link>Desempenho</Link>
        </li>
      </NavOptions>

      <BarButtons>
        <button>
          <TbMessages />
        </button>

        <button>
          <MdNotificationsNone />
        </button>

        <button>
          <BiHomeAlt />
        </button>
      </BarButtons>

      <ProfileUser>
        <ProfileImg width="38rem" height="38rem" />
      </ProfileUser>
    </HeaderStl>
  )
}
