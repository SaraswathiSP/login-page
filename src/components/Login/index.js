import {LoginContainer,LoginForm,Input,Heading,Label,InputContainer,LoginButton} from './LoginStyledComponents'


const Login = () =>{
    return (
        <LoginContainer>
        <LoginForm>
            <Heading>Sign In</Heading>
            <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" placeholder="Enter Email"/>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="text" placeholder="Enter Password"/>
            </InputContainer>
            <LoginButton>Login</LoginButton>
            <LoginButton>Create an Account</LoginButton>
        </LoginForm>
        </LoginContainer>
    )
}

export default Login