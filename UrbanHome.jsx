import React from 'react';
import {HomePage} from "./HomePage"

import {
  Container,
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  SimpleGrid,
  Input

} from '@chakra-ui/react';
export const UrbanHome = ()=>{
    return(
        <ChakraProvider theme={theme}>
        <VStack>
          <Container h="500px" maxW="container.xl" border="1px" 
           backgroundImage="url('https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg')"
           backgroundPosition="center"
           backgroundRepeat="no-repeat"
           bgSize="100%"
          >
            <Container >
           
            <Text align="center">
              Home/Delhi-Ncr
            </Text>
            </Container>
            

            <Text color="white" align="center" fontSize="50px" mt="300px">
              <b>
              Home, services and demand.
              </b>
             
            </Text>
      <SimpleGrid
        shadow="md"
        columns={{ sm: 2, md: 4 }}
        spacing='8'
        p='10'
        textAlign='center'
        rounded='lg'
        w="100%"
        display="Flex"
      Link
        >
   <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px" ml="150px" _hover={{ bg: "gray.200"}} >
   <Link href='' isExternal>
   <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png' ml="15px">
      </Image>
  </Link>
      <Text  fontSize="13px">
          Salon For Women
      </Text>
  </Box>
 
  <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px"  _hover={{ bg: "gray.200"}} >
  <Link href='' isExternal>
  <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png' alt='Dan Abramov'ml="15px" />
</Link>
   <Text fontSize="13px">
    Hair Skin and Nails
  </Text>
  </Box>
  
  <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px"  _hover={{ bg: "gray.200"}} >
  <Link href='' isExternal>
  <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png' alt='Dan Abramov' ml="20px" h="60px"/>
   </Link>
   <Text fontSize="13px">
    Women's Therapies
  </Text>
  </Box>
  
  <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px"  _hover={{ bg: "gray.200"}} >
  <Link href='' isExternal>
  <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png'  alt='Dan Abramov' ml="15px" />
  </Link>
    <Text fontSize="13px">
    Salon For Men
  </Text>
  </Box>
  
  
  <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px"  _hover={{ bg: "gray.200"}} >
  <Link href='' isExternal>
  <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png'  alt='Dan Abramov'ml="15px" />
  </Link>
  <Text fontSize="13px">
    Men's Therapies
  </Text>
  </Box>
</SimpleGrid>
          </Container>
          <HomePage/>
        </VStack>
    </ChakraProvider>
    )
}