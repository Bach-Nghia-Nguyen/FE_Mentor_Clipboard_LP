import { Box, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'assets/images/logo.svg'
import facebook from 'assets/icons/icon-facebook.svg'
import twitter from 'assets/icons/icon-twitter.svg'
import instagram from 'assets/icons/icon-instagram.svg'

function Footer() {
  return (
    <Box as="footer" bg="neutral.lightGrayishBlue" padding={{ base: '40px 0', w960: '40px 50px' }}>
      <Flex
        direction={{ base: 'column', w960: 'row' }}
        justifyContent={{ base: 'flex-start', w960: 'space-between' }}
        height={{ base: 'auto', w960: '80px' }}
        maxWidth="1250px"
        margin={{ base: '0', w1080: '0 auto' }}
      >
        <Flex
          direction={{ base: 'column', w960: 'row' }}
          alignItems={{ base: 'center' }}
          textAlign={{ base: 'center', w960: 'left' }}
          justifyContent={{ base: 'flex-start', w960: 'space-between' }}
          margin={{ base: '0 0 40px', w960: '0' }}
          width={{ base: 'auto', w960: '60%' }}
        >
          <Box width={{ base: '60px' }} margin={{ base: '0 0 30px', w960: '0' }}>
            <Image src={logo} alt="clipboard logo" />
          </Box>

          <Flex
            direction="column"
            height={{ base: 'auto', w960: '100%' }}
            justifyContent={{ base: 'flex-start', w960: 'space-between' }}
          >
            <Link href="/">
              <Text
                cursor="pointer"
                _hover={{ color: 'hover.strongCyan' }}
                margin={{ base: '0 0 20px', w960: '0' }}
              >
                FAQs
              </Text>
            </Link>

            <Link href="/">
              <Text
                cursor="pointer"
                _hover={{ color: 'hover.strongCyan' }}
                margin={{ base: '0 0 20px', w960: '0' }}
              >
                Contact Us
              </Text>
            </Link>
          </Flex>

          <Flex
            direction="column"
            height={{ base: 'auto', w960: '100%' }}
            justifyContent={{ base: 'flex-start', w960: 'space-between' }}
          >
            <Link href="/">
              <Text
                cursor="pointer"
                _hover={{ color: 'hover.strongCyan' }}
                margin={{ base: '0 0 20px', w960: '0' }}
              >
                Privacy Policy
              </Text>
            </Link>
            <Link href="/">
              <Text
                cursor="pointer"
                _hover={{ color: 'hover.strongCyan' }}
                margin={{ base: '0 0 20px', w960: '0' }}
              >
                Press Kit
              </Text>
            </Link>
          </Flex>

          <Flex
            direction="column"
            height={{ base: 'auto', w960: '100%' }}
            justifyContent={{ base: 'flex-start', w960: 'space-between' }}
          >
            <Link href="/">
              <Text cursor="pointer" _hover={{ color: 'hover.strongCyan' }}>
                Install Guide
              </Text>
            </Link>
          </Flex>
        </Flex>

        <Flex
          justifyContent="space-evenly"
          alignItems={{ base: 'flex-start', w960: 'center' }}
          margin={{ base: '0 auto', w960: '0' }}
          width={{ base: '240px', w960: '160px' }}
        >
          <Box cursor="pointer">
            <Image src={facebook} alt="facebook" />
          </Box>
          <Box cursor="pointer">
            <Image src={twitter} alt="twitter" />
          </Box>
          <Box cursor="pointer">
            <Image src={instagram} alt="instagram" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
