import styled from 'styled-components'
const ImgProfile = styled.img`
  border-radius: 100rem;
`
export default function ProfileImg(props = { height: String, width: String }) {
  return (
    <ImgProfile
      src="./test/img/profile.jpg"
      alt="profileicon"
      width={props.width || '55rem'}
      height={props.height || '55rem'}
    />
  )
}
