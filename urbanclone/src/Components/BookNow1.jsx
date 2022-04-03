import { Box ,Image} from '@chakra-ui/react'
import {Link} from "react-router-dom"

// Sample card from Airbnb
 export function Image1() {
  
    const property = {
      imageUrl: "https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/images/growth/home-screen/1603078787966-226e17.jpeg",
      imageAlt: 'Rear view of modern home with pool',
      
      title: 'Saloon Classic',
     
    }
  
    return (
      <Box _hover={{ height:'380px',width:'300px',transitionDuration: ".2s "}} boxShadow='dark-lg' p='6' rounded='md' bg='white' height='330px' width='260px' borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor='white' padding='12px'>
        <Image height="220px" src={property.imageUrl} alt={property.imageAlt} />
          <Box
            mt='1'
            fontWeight='semibold'
            as='h3'
            lineHeight='tight'
            isTruncated
            textAlign="center"
            >
            {property.title}
          </Box>
        
             <Link to={`/urbanhome/book/services`}><Box as='button' ml="13%"_hover={{ mt:"50px" }}mt='12%' mb="3%" borderRadius='md' bg='black' color='white' px={14} h={8}>
    Book now
  </Box></Link>
        
  
          
        
      </Box>
    )
  }