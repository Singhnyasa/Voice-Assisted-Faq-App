import React, { useEffect,useRef, useState } from 'react'
import { ChakraProvider,theme } from '@chakra-ui/react'
import Navbar from './Navbar'
import Faq from './Faq'
import alanBtn from '@alan-ai/alan-sdk-web';
import {scroller} from 'react-scroll'
const App = () => {
    const [index,setIndex] = useState(null)
    const alanBtnInstance = useRef(null);
    const [toggleColorFlag,setToggleColorFlag] = useState(false)
    useEffect(() =>{
        if(!alanBtnInstance.current){
          alanBtnInstance.current = alanBtn({
            key: 'b6aac75e688235039612fd908f35e7e32e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand:(commandData) =>{
              scroller.scrollTo('accordion-item-${commandData.faqId}',
              {duration:800,delay:0,smooth:'easeInOutQuart'})
              if(commandData.command === 'gotoFaq'){
                setIndex(commandData.faqId -1)

              } else if(commandData.command === 'toggleColorMode'){
                setToggleColorFlag(flag => !flag)
              }
            }
          })
        }

    },[]);
  return (
    <ChakraProvider theme ={theme}>
      <Navbar toggleColorFlag={toggleColorFlag} />
      <Faq index={index} setIndex={setIndex}/>
    </ChakraProvider>
  )
}

export default App