import styled from 'styled-components'

const ImgLogo = styled.img`
  margin-inline: 2rem;
`

export default function Logo(props = { height: String, width: String }) {
  return (
    <ImgLogo
      alt="Logo"
      width={props.width || '55rem'}
      height={props.height || '55rem'}
      src="./img/icon/logo-secundary-color.png"
    />
  )
}
