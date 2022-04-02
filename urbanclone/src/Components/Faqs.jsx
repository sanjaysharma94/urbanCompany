import {ScaleFade,Box} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { H2 } from './Heading'
export const Faq =  () => {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Box  align-content="left" ml="5%" margin-top="20px" textAlign="left" width='50%'
      min-height='50px'>
        <H2 min-height='50px' font-weight='bold' font-family= 'axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif' boxShadow='md' p='6' rounded='md' bg='white' onClick={onToggle}>What should I do to prepare for Waxing?</H2>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <p
            p='2px'
            text-align='left'
            color='black'
            mt='1'
            bg='white'
            rounded='md'
            shadow='md'
            font-family= 'axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif'
          >
           Although our salon at home professionals will do everything possible to make this process as pain free and satisfying as possible, there are certain things that you can do to ensure a great waxing session:
Ensure the room you get the service done is air conditioned (unless it is winter)
Exfoliate the skin lightly
Moisturise till the day before your waxing appointment 
Let the hair grow. Longer the hair, the better
Check yourself for burns, cuts etc. We recommend you treat it before getting waxing done or inform the professional
Let the professional know if you are allergic to anything particular to the service
          </p>
        </ScaleFade>
      </Box>
    )
  }