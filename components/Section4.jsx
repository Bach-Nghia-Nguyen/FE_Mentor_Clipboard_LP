import { Flex, Box, Text } from '@chakra-ui/react'
import Heading from './Heading'
import Image from 'next/image'
import blacklist from 'assets/icons/icon-blacklist.svg'
import preview from 'assets/icons/icon-preview.svg'
import textIcon from 'assets/icons/icon-text.svg'

function Section4() {
  return (
    <Box as="section" padding={{ base: '70px 15px 0' }}>
      <Box margin={{ base: '0 0 70px' }} textAlign="center">
        <Heading
          as="h2"
          marginBottom={{ base: '10px' }}
          color="neutral.darkGrayishBlue"
          fontSize={{ base: '28px', w768: '32px', w960: '34px' }}
          fontWeight="600"
        >
          Supercharge your workflow
        </Heading>
        <Text color="neutral.grayishBlue">We&apos;ve got the tools to boost your productivity</Text>
      </Box>

      <Flex
        direction={{ base: 'column', w1080: 'row' }}
        justifyContent={{ base: 'flex-start', w1080: 'space-evenly' }}
        maxWidth="1300px"
        margin={{ base: '0', w1080: '0 auto' }}
      >
        <Flex
          direction="column"
          margin={{ base: '0 0 40px' }}
          textAlign={{ base: 'center' }}
          width={{ base: 'auto', w1080: '400px' }}
        >
          <Box height={{ base: 'auto', w1080: '50px' }}>
            <Image src={blacklist} alt="blacklist" />
          </Box>
          <Heading
            as="h3"
            marginBottom={{ base: '10px' }}
            color="neutral.darkGrayishBlue"
            fontSize={{ base: '24px' }}
            fontWeight="600"
          >
            Create blacklists
          </Heading>
          <Text color="neutral.grayishBlue">
            Ensure sensitive information never makes its way to your clipboard by excluding certain
            sources.
          </Text>
        </Flex>

        <Flex
          direction="column"
          margin={{ base: '0 0 40px' }}
          textAlign={{ base: 'center' }}
          width={{ base: 'auto', w1080: '400px' }}
        >
          <Box height={{ base: 'auto', w1080: '50px' }}>
            <Image src={textIcon} alt="text" />
          </Box>
          <Heading
            as="h3"
            marginBottom={{ base: '10px' }}
            color="neutral.darkGrayishBlue"
            fontSize={{ base: '24px' }}
            fontWeight="600"
          >
            Plain text snippets
          </Heading>
          <Text color="neutral.grayishBlue">
            Remove unwanted formatting from copies text for a consistent look.
          </Text>
        </Flex>

        <Flex
          direction="column"
          margin={{ base: '0 0 40px' }}
          textAlign={{ base: 'center' }}
          width={{ base: 'auto', w1080: '400px' }}
        >
          <Box height={{ base: 'auto', w1080: '50px' }}>
            <Image src={preview} alt="preview" />
          </Box>
          <Heading
            as="h3"
            marginBottom={{ base: '10px' }}
            color="neutral.darkGrayishBlue"
            fontSize={{ base: '24px' }}
            fontWeight="600"
          >
            Sneak preview
          </Heading>
          <Text color="neutral.grayishBlue">
            Quick preview of all snippets on your Clipboard for easy access.
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Section4
