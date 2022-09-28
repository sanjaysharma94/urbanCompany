import { Box ,Image} from '@chakra-ui/react'
import {Link} from "react-router-dom"


 export function Image1(props) {
    
    const property = {
      imageUrl: props.imag,
      imageAlt: 'Rear view of modern home with pool',
      
      title:props.title
     
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