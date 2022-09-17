import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import logo from 'assets/images/logo.svg'
import mobileHeaderBg from 'assets/images/bg-header-mobile.png'
import desktopHeaderBg from 'assets/images/bg-header-desktop.png'
import Heading from './Heading'
import Button from './Button'

function Section1() {
  return (
    <Box
      as="section"
      bgImage={{ base: `url(${mobileHeaderBg.src})`, w768: `url(${desktopHeaderBg.src})` }}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      padding={{ base: '100px 15px 0', w960: '150px 15px 0' }}
    >
      <Box textAlign="center">
        <Box>
          <Image src={logo} alt="clipboard logo" />
        </Box>
        <Heading
          as="h1"
          marginBottom={{ base: '10px' }}
          color="neutral.darkGrayishBlue"
          fontSize={{ base: '32px', w768: '40px' }}
          fontWeight="600"
        >
          A history of everything you copy
        </Heading>

        <Text color="neutral.grayishBlue" width={{ base: '100%', w650: '615px' }} margin="0 auto">
          Clipboard allows you to track and organize everything you copy. Instantly access your
          clipboard on all your devices.
        </Text>

        <Flex
          direction={{ base: 'column', w960: 'row' }}
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'flex-start', w960: 'center' }}
          margin={{ base: '40px 0 0' }}
        >
          <Button
            width={{ base: '100%', w440: '400px', w960: '200px' }}
            padding={{ base: '10px 0' }}
            bgColor="primary.strongCyan"
            margin={{ base: '0 0 20px', w960: '0 10px 0 0' }}
            color="white"
            boxShadow="0px 0px 10px -2px hsl(171, 66%, 44%)"
            _hover={{
              bgColor: 'hover.strongCyan',
            }}
          >
            Download for iOS
          </Button>
          <Button
            width={{ base: '100%', w440: '400px', w960: '200px' }}
            padding={{ base: '10px 0' }}
            bgColor="primary.lightBlue"
            color="white"
            margin={{ base: '0', w960: '0 0 0 10px' }}
            boxShadow="0px 0px 10px -2px hsl(233, 100%, 69%)"
            _hover={{
              bgColor: 'hover.lightBlue',
            }}
          >
            Download for Mac
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Section1
