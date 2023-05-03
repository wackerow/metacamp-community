import { Box, Flex, Image } from '@chakra-ui/react'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import { PageMetadata } from '@/components'

export default function Home() {
  return (
    <Box bg="#F0B130" h="100vh" w="100vw">
      <PageMetadata
        title="MetaCamp"
        description="An IRL community experience"
      />
      <Flex
        as="main"
        direction="column"
        h="full"
        align="center"
        bg="#292F51"
        pt="15vmin"
      >
        <Image
          src="/assets/chili-home.svg"
          position="absolute"
          inset="1rem auto auto 1.5rem"
          width="8vmin"
          aspectRatio={1}
          alt="Chili home icon"
        />
        <Image
          src="/assets/costa-rica.svg"
          width="clamp(100px, 40%, 290px)"
          height="72px"
          alt="Costa Rica text"
          zIndex={2}
        />
        <Image
          src="/assets/title-logo.svg"
          width="clamp(200px, 90%, 800px)"
          alt="MetaCamp logo"
          zIndex={2}
          px={8}
        />
        <Box
          w="100%"
          position="absolute"
          inset="auto 0 0 0"
        >
          <Image
            src="/assets/hero-bg.svg"
            objectFit="cover"
            objectPosition="left"
            minW="100%"
            height="70vh"
            alt="Beach background art"
            zIndex={1}
            overflow="visible"
          />
        </Box>
      </Flex>
    </Box>
  )
}
