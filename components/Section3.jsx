import { Flex, Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Heading from './Heading'
import devices from 'assets/images/image-devices.png'

function Section3() {
  return (
    <Box as="section" padding={{ base: '80px 15px 0' }}>
      <Box textAlign="center" margin={{ base: '0 0 50px', w1080: '0 0 65px' }}>
        <Heading
          as="h2"
          marginBottom={{ base: '10px' }}
          color="neutral.darkGrayishBlue"
          fontSize={{ base: '28px', w768: '32px', w960: '34px' }}
          fontWeight="600"
        >
          Access Clipboard Anywhere
        </Heading>
        <Text color="neutral.grayishBlue" maxWidth="700px" margin="0 auto">
          Whether you&apos;re on the go, or at your computer, you can access all your Clipboard
          snippets in a few simple clicks.
        </Text>
      </Box>
      <Box
        margin="0 auto"
        width={{ base: '100%', w440: '400px', w768: '600px', w960: '800px', w1080: '860px' }}
      >
        <Image src={devices} alt="devices" />
      </Box>
    </Box>
  )
}

export default Section3
