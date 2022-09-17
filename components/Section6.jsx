import { Box, Text, Flex } from '@chakra-ui/react'
import Heading from './Heading'
import Button from './Button'

function Section6() {
  return (
    <Box as="section" padding={{ base: '0 15px 120px' }}>
      <Box textAlign="center" margin={{ base: '0 0 40px' }}>
        <Heading
          as="h2"
          marginBottom={{ base: '10px' }}
          color="neutral.darkGrayishBlue"
          fontSize={{ base: '28px', w768: '32px', w960: '34px' }}
          fontWeight="600"
        >
          Clipboard for iOS and Mac OS
        </Heading>
        <Text color="neutral.grayishBlue" maxWidth="700px" margin="0 auto">
          Available for free on the App Store. Download for Mac or iOS, sync with iCloud and
          you&apos;re ready to start adding to your clipboard.
        </Text>
      </Box>
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
          margin={{ base: '0', w960: '0 0 0 10px' }}
          bgColor="primary.lightBlue"
          color="white"
          boxShadow="0px 0px 10px -2px hsl(233, 100%, 69%)"
          _hover={{
            bgColor: 'hover.lightBlue',
          }}
        >
          Download for Mac
        </Button>
      </Flex>
    </Box>
  )
}

export default Section6
