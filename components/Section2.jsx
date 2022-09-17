import { Flex, Text, Box } from '@chakra-ui/react'
import Heading from './Heading'
import computer from 'assets/images/image-computer.png'
import Image from 'next/image'

function Section2() {
  return (
    <Box as="section" padding={{ base: '120px 15px 0', w1080: '120px 0 0' }}>
      <Box textAlign="center" margin={{ base: '0 0 60px' }}>
        <Heading
          as="h2"
          marginBottom={{ base: '10px' }}
          color="neutral.darkGrayishBlue"
          fontSize={{ base: '28px', w768: '32px', w960: '34px' }}
          fontWeight="600"
        >
          Keep track of your snippets
        </Heading>
        <Text color="neutral.grayishBlue" maxWidth="700px" margin="0 auto">
          Clipboard instantly stores any item you copy in the cloud, meaning you can access your
          snippets immediately on all your devices. Our Mac and iOS apps will help you organize
          everything.
        </Text>
      </Box>

      <Flex direction={{ base: 'column', w1080: 'row' }}>
        <Box
          margin="0 auto"
          width={{ base: '100%', w440: '400px', w1080: '55%' }}
          transform={{ base: 'none', w1080: 'translate(-35px)' }}
        >
          <Image src={computer} alt="computer" />
        </Box>
        <Flex
          width={{ base: 'auto', w1080: '45%' }}
          direction={{ base: 'column' }}
          margin={{ base: '50px 0 0', w1080: '0' }}
          padding={{ base: '0', w1080: '0 0 0 35px' }}
          justifyContent={{ base: 'flex-start', w1080: 'center' }}
        >
          <Box margin={{ base: '0 0 40px' }} textAlign={{ base: 'center', w1080: 'left' }}>
            <Heading
              as="h3"
              marginBottom={{ base: '10px' }}
              color="neutral.darkGrayishBlue"
              fontSize={{ base: '24px' }}
              fontWeight="600"
            >
              Quick Search
            </Heading>
            <Text color="neutral.grayishBlue" width={{ base: 'auto', w1080: '390px' }}>
              Easily search your snippets by content, category, web address, application, and more.
            </Text>
          </Box>

          <Box margin={{ base: '0 0 40px' }} textAlign={{ base: 'center', w1080: 'left' }}>
            <Heading
              as="h3"
              marginBottom={{ base: '10px' }}
              color="neutral.darkGrayishBlue"
              fontSize={{ base: '24px' }}
              fontWeight="600"
            >
              iCloud Sync
            </Heading>
            <Text color="neutral.grayishBlue" width={{ base: 'auto', w1080: '390px' }}>
              Instantly saves and syncs snippets across all your devices.
            </Text>
          </Box>

          <Box margin={{ base: '0 0 40px' }} textAlign={{ base: 'center', w1080: 'left' }}>
            <Heading
              as="h3"
              marginBottom={{ base: '10px' }}
              color="neutral.darkGrayishBlue"
              fontSize={{ base: '24px' }}
              fontWeight="600"
            >
              Complete History
            </Heading>
            <Text color="neutral.grayishBlue" width={{ base: 'auto', w1080: '390px' }}>
              Retrieve any snippets from the first moment your started using the app.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Section2
