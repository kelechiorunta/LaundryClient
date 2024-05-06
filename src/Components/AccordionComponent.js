import { Box, Button, UnorderedList, Text, Heading, ListItem } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import {motion} from 'framer-motion'
import { FaReact, FaArrowUp, FaArrowDown, FaCaretDown, FaCaretUp } from 'react-icons/fa';

export default function AccordionComponent() {
    
    const [selectedId, setSelectedId] = useState(0)

    const [listHeight, setListHeight] = useState(0)

    const MotionUList = motion(UnorderedList)
    const MotionListItem = motion(ListItem)

    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    useEffect(()=>{
        
        const dropdownListHeight = (((document.querySelectorAll('.myList')[selectedId===null?0:selectedId===0?1:selectedId-1].scrollHeight)))

        setListHeight(dropdownListHeight)

    }, [selectedId])


    const listRef = useRef(null)

    const accordion = [{id:1, topic:"What services can we render?", content:[{id:1, answer:"Washing"}, {id:2, answer:"Starching"}, {id:3, answer:"Ironing"}]},
                       {id:2, topic:"How many branches do we have?", content:[{id:1, answer:"Hi, I hope you are having a nice time."}]},
                       {id:3, topic:"Do we render doorstep delivery?", content:[{id:1, answer:`We provide delivery service for laundered services.
                        Just reach our customer service on 080******00. Our routes include Surulere, Ajah, Ago and Festac...`}]}]

    const handleSelect = (id) => {

        setSelectedId(selectedId === id ? null : id);
        setIsOpen(selectedId===id? null : true)
        
         
    }

    const uoListVariant = {transition:{staggerChildren:0.5}}

    // const listVariant = {hidden:{x:'-100vw', opacity:0}, visible:{x:'0', opacity:1}}

  return (
    <Box 
    mx={'auto'}
    w={'80%'}
    shadow={'lg'}
    bg={'white'}
    borderRadius={'30px'}
    p={8}><Heading as={'h2'} px={14} py={8} fontFamily={'Raleway'}>Frequently Asked Questions</Heading>
    
        {accordion.map((item, index) => {

            return (
                <div>
                <Button
                w={'90%'}
                mx={'5%'}
                as={'flex'}
                justifyContent={'space-between'}
                fontFamily={'Raleway, sans-serif'}
                fontSize={'20px'}
                py={8}
                className={'accordion_btn'} 
                key={item.id} 
                onClick={()=>{handleSelect(item.id);}}>
                    {`${item.topic}`}
                    {isOpen && (selectedId===item.id)? <FaCaretUp onClick={toggleList}/> : <FaCaretDown onClick={toggleList}/> }
                </Button >
                <UnorderedList
                className='myList'
                ref={listRef}
                w={'90%'}
                mx={'5%'}
                px={8}
                shadow={'md'}
                borderRadius={'2px'}
                style={{height:`${(selectedId===item.id)? `${listHeight}px` : '0'}`
                , overflow:'hidden',transition:'height 1s ease'}}>
                {item.content.map(
                (i)=><MotionListItem
                        variants={uoListVariant}
                        fontFamily={'Raleway'}
                        py={2}>
                      {i.answer}
                    </MotionListItem>)}
                </UnorderedList> 
                </div>
                
            )
        })
        }
    </Box>
  )
}
