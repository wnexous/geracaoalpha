import styled from 'styled-components'

const ImgLogo = styled.img`
  margin-inline: 1.2rem;
  margin-block: auto;
  display: flex;
  justify-content: center;
  vertical-align: middle;
`

export default function Logo(props = { height: String, width: String }) {
  return (
    <ImgLogo
      alt="Logo"
      width={props.width || '45rem'}
      height={props.height || '45rem'}
      src="./img/icon/logo-secundary-color.png"
    />
  )
}
