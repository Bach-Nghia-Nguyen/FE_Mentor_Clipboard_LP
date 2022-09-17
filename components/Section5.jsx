import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import microsoft from 'assets/images/logo-microsoft.png'
import ibm from 'assets/images/logo-ibm.png'
import hp from 'assets/images/logo-hp.png'
import google from 'assets/images/logo-google.png'
import vectorGraphics from 'assets/images/logo-vector-graphics.png'

function Section5() {
  return (
    <Box as="section" padding={{ base: '80px 15px', w1080: '80px 0' }}>
      <Flex
        direction={{ base: 'column', w1080: 'row' }}
        justifyContent={{ base: 'center', w1080: 'space-around' }}
        maxWidth="1380px"
        margin={{ base: '0', w1080: '0 auto' }}
      >
        <Box textAlign="center" margin={{ base: '0 0 40px', w1080: '0' }}>
          <Image src={google} alt="google" />
        </Box>
        <Box textAlign="center" margin={{ base: '0 0 40px', w1080: '0' }}>
          <Image src={ibm} alt="ibm" />
        </Box>
        <Box textAlign="center" margin={{ base: '0 0 40px', w1080: '0' }}>
          <Image src={microsoft} alt="microsoft" />
        </Box>
        <Box textAlign="center" margin={{ base: '0 0 40px', w1080: '0' }}>
          <Image src={hp} alt="hp" />
        </Box>
        <Box textAlign="center" margin={{ base: '0 0 40px', w1080: '0' }}>
          <Image src={vectorGraphics} alt="vector graphics" />
        </Box>
      </Flex>
    </Box>
  )
}

export default Section5
