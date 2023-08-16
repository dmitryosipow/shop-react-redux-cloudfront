import Box from "@mui/material/Box";

const redirect_url = "http://localhost:3000/callback";
const href = `https://seryecoty.auth.eu-west-1.amazoncognito.com/login?client_id=5og0rbm014sim8efte8qri3sib&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=${redirect_url}`;

export default function Login() {
  return (
    <Box py={3} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <h3>Please login using Cognito</h3>
      <a href={href}>Click me</a>
    </Box>
  );
}
