import { Box, Button, Heading, HStack, Input, Stack ,Text,VStack} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
        <Stack direction={['column','row']}>
          <VStack alignItems={"stretch"} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}> 
               Suscribe to get updates 
            </Heading>
            <HStack
            borderBottom={"2px solid white"}
            py={'2'}
            >

                <Input placeholder='Enter Email Here..' 
                border='none'
                outline='none'
                borderRadius='none'
                focusBorderColor='none'
                />
                <Button
                    p={'0'}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                >
                    <AiOutlineSend size={20}/>
                </Button>
            </HStack>
            </VStack>  
            <VStack w={'full'}
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']}
            > 
            <Heading textTransform={'uppercase'} textAlign={['center','left']}>
            FLIXFUSION HUB
            </Heading>
            <Text> All rights reserved</Text>
            </VStack>
            <VStack w={'full'}> 
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'white'}/>
            <a target={'blank'} href="https://www.linkedin.com/in/vishwajeet-sharma-649a21205">Linkedin</a>
            <Button variant={'link'} colorScheme={'white'}/>
            <a target={'blank'} href="https://www.instagram.com/vishu.livincool/">Instagram</a>
            <Button variant={'link'} colorScheme={'white'}/>
            <a  target={'blank'}href="https://github.com/vishusharmaX">Github</a>
            <Button variant={'link'} colorScheme={'white'}/>
            <a target={'blank'} href="https://twitter.com/VishuSh62450403?t=m-5QTgaVVlWHmsFXDuXxFw&s=09">Twitter</a>
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer