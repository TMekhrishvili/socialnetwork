import { Button, Flex, Heading, Input, Box, Text, Center } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Box boxShadow='xl' bg='white'>
                <Flex direction="column" background="gray.100" p={8}>
                    <Heading mb={6}>Sign In</Heading>
                    <Input placeholder='email' background="white" mb={3} type="email" />
                    <Input placeholder='password' background="white" mb={3} type="password" />
                    <Button colorScheme="teal" mb={6} >Sign In</Button>

                    <Button
                        w={'full'}
                        mb={3}
                        maxW={'md'}
                        colorScheme={'facebook'}
                        leftIcon={<FaFacebook />}>
                        <Center>
                            <Text>Sign In with Facebook</Text>
                        </Center>
                    </Button>
                    <Button w={'full'} mb={3} variant={'outline'} leftIcon={<FcGoogle />}>
                        <Center>
                            <Text>Sign In with Google</Text>
                        </Center>
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default SignIn
