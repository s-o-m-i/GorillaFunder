import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { AppContext } from '../Context/AuthContextProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { login } from '../libs/authService';

const Login = () => {
  const context = useContext(AppContext);
  const { isAuth, login: loginContext } = context;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {  user, user : {token} } = await login(email, password);
      loginContext(token, user);
      toast({
        title: 'Login successful.',
        description: "You've successfully logged in.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Login failed.',
        description:  error.response?.data || 'An error occurred.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const navigate = useNavigate();
  const location = useLocation();
  const afterAuth = () => {
    if (location.state?.from?.pathname) {
      localStorage.setItem('gf-token', context.token);
      
      // Redirect to the path the user was trying to access, or to home page if not available
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
      return <></>
    }
    else  {
      return <Navigate to="/" />;
    }

  }

  return (
    <>
      {isAuth ? (
        // <Navigate to="/" />
        afterAuth()
      ) : (
        <>
          <Navbar />
          <Box
            w={['full', 'md']}
            p={[8, 10]}
            marginBottom="10vh"
            mt={[20, '10vh']}
            mx="auto"
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
          >
            <VStack spacing={4} align="flex-start" w="full">
              <VStack spacing={4} align={['flex-start', 'center']} w="full" mb={3}>
                <Heading size="lg">Login</Heading>
                <Text>
                  New to GorillaFunder?{' '}
                  <Button color="#e98429" variant="link">
                    <Link to="/signup">Signup</Link>
                  </Button>
                </Text>
              </VStack>
            </VStack>
            <FormControl padding={'2vh 0'}>
              <FormLabel>E-mail Address</FormLabel>
              <Input
                rounded={10}
                variant="filled"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl padding={'1vh 0'}>
              <FormLabel>Password</FormLabel>
              <Input
                rounded={10}
                variant="filled"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <HStack w="full" justify={'space-between'} padding={'2vh 0 3vh'}>
              <Checkbox>Remember me.</Checkbox>
              <Link to="/forgot-password">
                <Button variant={'link'} color="#e98429">
                  Forget Password?
                </Button>
              </Link>
            </HStack>
            <Button
              rounded={10}
              sx={{ bg: '#e98429', color: 'white' }}
              w={'full'}
              padding={'1vh 5vw'}
              onClick={handleSubmit}
              disabled={email === '' || password === ''}
            >
              Login
            </Button>
          </Box>
          <Footer />
        </>
      )}
    </>
  );
};

export default Login;
