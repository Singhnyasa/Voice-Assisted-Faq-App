import React from 'react'
import{
    Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import FAQ_LIST from './faq.json'

const Faq = ({index,setIndex}) => {
  return (
   <Flex direction="column" p="4">
    <Box mb='8'>
        <Heading size="md">Frequently Asked Questions</Heading>

    </Box>
    <Accordion allowToggle index={index}>
        {
            FAQ_LIST.map(faq =>(
                <AccordionItem key ={faq.id} name={'accordion-item-${faq.id}'}>
                    <AccordionButton onClick={() => setIndex(faq.id -1) }>
                      <Box flex='4' textAlign='left'>
                        <Text fontWeight='bold'>{faq.question}</Text>
                      </Box>
                    </AccordionButton>
                    <AccordionPanel pb='6'>
                   {faq.answer}
                    </AccordionPanel>

</AccordionItem>
            ))
        }
        </Accordion>
   </Flex>
  )
}

export default Faq