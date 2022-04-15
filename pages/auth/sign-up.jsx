import { Button, Flex, Heading, Input, Box, Text, Center } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Box boxShadow='xl' bg='white'>
                <Flex direction="column" background="gray.100" p={10}>
                    <Heading mb={6}>Sign Up</Heading>
                    <Input placeholder='username' background="white" mb={3} type="text" />
                    <Input placeholder='email' background="white" mb={3} type="email" />
                    <Input placeholder='password' background="white" mb={3} type="password" />
                    <Input placeholder='repeat password' background="white" mb={3} type="password" />
                    <Button colorScheme="teal" mb={6} >Sign Up</Button>
                    <Button
                        w={'full'}
                        mb={3}
                        maxW={'md'}
                        colorScheme={'facebook'}
                        leftIcon={<FaFacebook />}>
                        <Center>
                            <Text>Sign Up with Facebook</Text>
                        </Center>
                    </Button>
                    <Button w={'full'} mb={3} variant={'outline'} leftIcon={<FcGoogle />}>
                        <Center>
                            <Text>Sign Up with Google</Text>
                        </Center>
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default SignUp
