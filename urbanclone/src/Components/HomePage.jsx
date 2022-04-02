
import React from 'react'


import {
    
    Flex,
    Container,
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Center,
    Square,
    SimpleGrid,
    Image,
    PopoverBody,
 

  } from '@chakra-ui/react';
  
export const HomePage =() => {
      
  return (
    <>
    <VStack>
        <Container>
        <Text fontSize='40px' color='black' mt="160px" ml="100px" fontWeight="bold">
            Home Services
        </Text>
        </Container>
       
    <SimpleGrid
        shadow="md"
        columns={{ sm: 2, md: 4 }}
        spacing='8'
        p='10'
        textAlign='center'
        rounded='lg'
        w="100%"
        display="Flex"
        
        >
   <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px" ml="150px" _hover={{ bg: "gray.200"}} >
   <Link href='' isExternal>
   <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png'  alt='Dan Abramov' ml="15px"/>
   </Link>
   <Text fontSize="13px">
    Appliance Repalir
  </Text>
   </Box>
  
  <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px"  _hover={{ bg: "gray.200"}} >
  <Link href='https://chakra-ui.com' isExternal>
  <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png' alt='Dan Abramov'ml="15px" />
  </Link>
  <Text fontSize="13px">
    Home Painting
  </Text>
  </Box>
  
  <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px"  _hover={{ bg: "gray.200"}} >
  <Link href='https://chakra-ui.com' isExternal>
  <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png' alt='Dan Abramov' ml="15px"/>
  </Link>
  <Text fontSize="13px">
    Clean And Pest
  </Text>
  </Box>
  
  <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px"  _hover={{ bg: "gray.200"}} >
  <Link href='https://chakra-ui.com' isExternal>
  <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png'  alt='Dan Abramov'ml="15px" />
  </Link>
  <Text fontSize="13px">
    Disinfection
  </Text>
  </Box>
  
  <Box boxShadow='md' p='6' rounded='md' bg='white' w="150px" h="130px"  _hover={{ bg: "gray.200"}} >
  <Link href='https://chakra-ui.com' isExternal>
  <Image src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png' h="70px" alt='Dan Abramov'ml="19px" />
  </Link>
  <Text fontSize="13px">
    Home Repairs
  </Text>
  </Box>
 </SimpleGrid>


<Container maxW='container.xl'  h="300px" w="1200px" shadow="2xl" borderRadius="10px" m="100px">
    <Flex gap="1%">
        <Box  h="150px" w="25%" mt="50px"   _hover={{ width: "28%" }}  >
      
        <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1648016647269-b45027.jpeg"></Image>
                       
        </Box>
        <Box  h="150px" w="25%" mt="50px"  _hover={{ width: "28%" }}>
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1648205727672-3eaac2.jpeg">

            </Image>
        </Box>
        <Box  h="150px" w="25%" mt="50px"  _hover={{ width: "28%" }}>
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1643641444567-d2aed7.jpeg"></Image>
        </Box>
        <Box  h="150px" w="25%" mt="50px"    _hover={{ width: "28%" }}>
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1645182034801-5640ab.jpeg">
          </Image>
        </Box>
        </Flex>
  </Container>
  <Container maxW='container.xl'  h="350px" w="1200px" shadow="2xl" borderRadius="10px" m="100px">
    <b>
    <Text fontSize="x-large" align="center" mt="20px" >New Catogery Launches</Text>
    </b>
    
    <Flex gap="1%">
        <Box  h="150px" w="25%" mt="50px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg"></Image>
            <Text align="center" fontWeight="bold">
              Laser and Advanced Facials
            </Text>
            <Text align="center" color="grey">
              Advanced skin Treatments
            </Text>
        </Box>
        <Box  h="150px" w="25%" mt="50px" >
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" h="160px" w="300px">
            </Image>
            <Text align="center" fontWeight="bold" >
              Furniture making, Upholstery and Polish
            </Text>
        </Box>
        <Box  h="150px" w="25%" mt="50px"  >
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1634830389086-3d3a25.png"></Image>
          <Text align="center" fontWeight="bold" >
              Appliance Warranty
            </Text>
        </Box>
        <Box  h="150px" w="25%" mt="50px" >
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1645182034801-5640ab.jpeg">
          </Image>
          <Text align="center" fontWeight="bold" >
              Air Purifier
            </Text>
            <Text align="center" color="grey">
              flat ₹ off 
            </Text>
        </Box>
        </Flex>
  </Container>

  <Container maxW='container.xl'  h="380px" w="1200px" shadow="2xl" borderRadius="10px" m="100px">
    <b>
    <Text fontSize="x-large" align="center" mt="20px" >Appliances</Text>
    </b>
    <b>
    <Text fontSize="large" align="center" mt="20px" color="grey">Servicing, Repair, installation and Uninstallation</Text>
    </b>
    
    <Flex gap="1%">
        <Box h="150px" w="25%" mt="50px" >
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1640322586655-03f2a3.jpeg"></Image>
            <Text align="center" fontWeight="bold">
             Insult Video Consult for Free
            </Text>
            <Text align="center" color="grey">
              Free and Instant Daignosis
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px"  >
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png" h="145px" w="300px">

            </Image>
            <Text align="center" fontWeight="bold">
             Gyser
            </Text>
            <Text align="center" color="grey">
              strts at ₹249
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px"  >
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png" h="145px" w="300px"></Image>
          <Text align="center" fontWeight="bold">
             Water Purifier
            </Text>
            <Text align="center" color="grey">
              Up to 49% Off
            </Text>
        
        </Box>
        <Box h="150px" w="25%" mt="50px">
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg" h="145px"  w="300px">
          </Image>
          <Text align="center" fontWeight="bold">
             Air Purifier
            </Text>
            <Text align="center" color="grey">
              flat ₹100 off
            </Text>
        </Box>
        </Flex>
  </Container>


  <Container maxW='container.xl'  h="380px" w="1200px" shadow="2xl" borderRadius="10px" m="100px">
    <b>
    <Text fontSize="x-large" align="center" mt="20px" >Salone,spa and Massage services</Text>
    </b>
    <b>
    <Text fontSize="large" align="center" mt="20px" color="grey">Higenic and single use products | low-contact services</Text>
    </b>
    
    <Flex gap="1%">
        <Box h="150px" w="25%" mt="50px" >
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"></Image>
            <Text align="center" fontWeight="bold">
            Salon Prime
            </Text>
            <Text align="center" color="grey">
              Free Waxing
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg" h="160px" w="300px">

            </Image>
            <Text align="center" fontWeight="bold">
            Salon For Men
            </Text>
            <Text align="center" color="grey">
            Flat ₹100 off
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png"></Image>
          <Text align="center" fontWeight="bold">
            Spa For Women
            </Text>
            <Text align="center" color="grey">
            Free Head Massage
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg">
          </Image>
          <Text align="center" fontWeight="bold">
            Massage for Men
            </Text>
            <Text align="center" color="grey">
            Starts at ₹499 off
            </Text>
        </Box>
        </Flex>
  </Container>

  <Container maxW='container.xl'  h="380px" w="1200px" shadow="2xl" borderRadius="10px" m="100px">
    <b>
    <Text fontSize="x-large" align="center" mt="20px" >Cleaning and Pest Control</Text>
    </b>
   
    
    <Flex gap="1%">
        <Box h="150px" w="25%" mt="50px" >
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg"></Image>
            <Text align="center" fontWeight="bold">
             Bathroom And Kitchen Cleaning
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg" >
            </Image>
            <Text align="center" fontWeight="bold">
             Full Home Cleaning
            </Text>
            
        </Box>
        <Box h="150px" w="25%" mt="50px">
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg" ></Image>
          <Text align="center" fontWeight="bold">
             Sofa And Carpet Cleaning
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg" h="190px">
          </Image>
          <Text align="center" fontWeight="bold">
             Pest Control
            </Text>
        </Box>
        </Flex>
  </Container>

  <Container maxW='container.xl'  h="400px" w="1200px" shadow="2xl" borderRadius="10px" m="100px">
    <b>
    <Text fontSize="x-large" align="center" mt="20px" >UC Laxury Experience</Text>
    </b>
    <b>
    <Text fontSize="large" align="center" mt="20px" color="grey">Top Professional | Best Brands | Premium Experience</Text>
    </b>
    
    <Flex gap="1%">
        <Box h="150px" w="25%" mt="50px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png" h="190px"></Image>
            <Text align="center" fontWeight="bold">
             Salone Laxe
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png" h="190px" w="300px">
            </Image>
            <Text align="center" fontWeight="bold">
            Salone For Men Royale
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png" h="190px"></Image>
          <Text align="center" fontWeight="bold">
            Spa Luxe
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png" h="190px">
          </Image>
          <Text align="center" fontWeight="bold">
            Massage Theropy For Men Roayale
            </Text>
        </Box>
        </Flex>
  </Container>

  <Container maxW='container.xl'  h="375px" w="1200px" shadow="2xl" borderRadius="10px" m="100px">
    <b>
    <Text fontSize="x-large" align="center" mt="20px" >Home Repairs</Text>
    </b>
   
    
    <Flex gap="1%">
        <Box h="150px" w="25%" mt="50px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" w="100%" h="190px"></Image>
            <Text align="center" fontWeight="bold">
             Furniture Making, Upholstery And Polish
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg" h="190px" w="300px">
             </Image>
             <Text align="center" fontWeight="bold">
           Carpeters
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg" h="190px"></Image>
          <Text align="center" fontWeight="bold">
           Electricians
            </Text>
        </Box>
        <Box h="150px" w="25%" mt="50px">
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg" h="190px" w="100%">
          </Image>
          <Text align="center" fontWeight="bold">
           Plumbers
            </Text>
        </Box>
        </Flex>
  </Container>


</VStack>



    </>
  )
}
