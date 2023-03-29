import styled from 'styled-components'

export const LoginContainer = styled.div`
background-image: url("https://res.cloudinary.com/dg0telgxq/image/upload/v1680081328/blurry-gradient-haikei_1_xukx0u.svg");
height:100vh;
width:100vw;
background-size:cover;
display: flex;
  justify-content: center;
  align-items: center;
`


export const LoginForm = styled.div`
display:flex;
flex-direction:column;
padding:25px;
background-color: #07182E;
width:400px;
min-height:400px;
border-radius:50px 0 50px 0;
@media screen and (max-width:767px) {
    padding:25px;
    width:300px;
    height:300px;
    margin-top:50px;
}

`
export const Heading = styled.h2`
color:#fff;
font-size:25px;
text-align:center;
`
export const InputContainer = styled.div`
display:flex;
flex-direction:column;
`


export const Label = styled.label`
color:#fff;
font-size:25px;
margin-bottom:5px;

`

export const Input = styled.input`
width:80%;
margin-bottom:15px;
height:30px;
padding:10px;
border-radius:0 10px 0 10px;
border:none
`

export const LoginButton = styled.button`
width:85%;
height:45px;
font-weight:bold;
border:none;
font-size:15px;
font-family:"Roboto",sans-serif;
cursor:pointer;
margin-top:15px;
border-radius: 15px;
background: #ffffff;
@media screen and (max-width: 767px) {
    width:87%;
}
`