import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import { CampersPreview, PageMetadata, Section, Timeline } from '@/components'

export default function Home() {
  return (
    <>
      {/* Metadata */}
      <PageMetadata
        title="MetaCamp"
        description="An IRL community experience"
      />
      {/* Section: Hero */}
      <Section align="center" pt="8vmin" position="relative">
        {/* Section content */}
        <Flex direction="column" gap={0} alignItems="center">
          {/* COSTA RICA text image */}
          <Image
            src="/assets/title-logo.svg"
            width="clamp(200px, 90%, 800px)"
            alt="MetaCamp logo"
            zIndex={2}
          />
          <Image
            src="/assets/costa-rica.svg"
            width="clamp(100px, 40%, 290px)"
            height="72px" // TODO: Magic number
            alt="Costa Rica text"
            zIndex={2}
          />
          <Button // TODO: Will likely be a link
            bg="primary"
            color="fg"
            fontSize="xl"
            zIndex={2}
            textTransform="uppercase"
            p={8}
            mt={12}
            borderRadius="2xl"
            w="min(100%, 290px)" // TODO: Magic number
            isDisabled
          >
            Register
          </Button>
        </Flex>
        {/* Section background */}
        <Box h="min(34vw, 420px)" />
        <Image
          src="/assets/hero-bg-layer-0.svg"
          objectFit="cover"
          objectPosition="left"
          position="absolute"
          bottom={0}
          w="full"
          alt="Beach background art"
          zIndex={1}
        />
        <Image
          src="/assets/hero-bg-layer-1.svg"
          objectFit="cover"
          objectPosition="left"
          position="absolute"
          bottom={0}
          w="full"
          alt="Beach background art"
          zIndex={1}
        />
        <Image
          src="/assets/hero-bg-layer-2.svg"
          objectFit="cover"
          objectPosition="left"
          position="absolute"
          bottom={-1}
          w="full"
          alt="Beach background art"
          zIndex={1}
        />
      </Section>
      {/* Section: Our vision and values */}
      <Section bg="primary" mt="-1px">
        {/* Section contents */}
        <Flex
          gap={[8, null, null, 12]}
          p={[8, null, null, 16]}
          zIndex={2}
          direction={['column', null, null, 'row']}
        >
          <Flex direction="column" flex={1}>
            <Text as="h2" textStyle="heading">
              Our vision and values
            </Text>
            <Text>
              MetaCamp is the brain child of a globally diverse group of crypto
              stewards, united by a shared ethos of collective world building,
              community coherence, and holistic stimulation.
            </Text>
            <Text>
              The outcome of this event is a profound sense of purpose, clarity,
              and new connections with like minded and open hearted individuals.
            </Text>
          </Flex>
          <Grid
            flex={1}
            h="fit-container"
            bg="fg"
            borderRadius="2xl"
            color="#6F85F2"
            placeItems="center"
            position="relative"
            minH="10rem" /* TODO: Fix once images present */
          >
            [Photo carousel]
          </Grid>
        </Flex>
      </Section>
      {/* Wooden board sign */}
      <Section bg="primary" position="relative">
        {/* Section contents */}
        <Box
          h="min(50vw, 50rem)"
          w="full"
          zIndex={2}
          pt={[2, 4, 8, 12]}
        >
        <Box
          mx="auto"
          bgImage="url(/assets/wood-sign-texture.svg)"
          bgSize="cover"
          bgRepeat="repeat"
          px={12}
          py={8}
          w="fit-content"
          boxShadow="0px 8px 0px 3px var(--chakra-colors-blackAlpha-500)"
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            bottom: "100%",
            left: "5%",
            bgImage: "url(/assets/bird.svg)",
            bgRepeat: "no-repeat",
            bgSize: "contain",
            width: '3ch',
            height: '3ch',
            fontSize: ["lg", "xl", "3xl", "5xl"]
          }}
        >
          <Text
            fontFamily="callout"
            maxW="53ch"
            color="blackAlpha.700"
            textAlign="center"
            lineHeight="1.8"
            fontSize={["lg", "xl", "3xl", "5xl"]}
          >
            Join us for 10 days of wild ranging conversations un-conference
            sessions, playa excursions, fresh and local food prepared daily.
          </Text>
        </Box>
        </Box>
        {/* Section background */}
        <Image
          position="absolute"
          bottom={0}
          src="/assets/wood-sign-bg.svg"
          objectFit="cover"
          objectPosition="bottom"
          w="full"
          alt="Beach background art"
          zIndex={1}
          // mt="-140px" // TODO: Magic number
        />
      </Section>
      {/* Section: Timeline */}
      <Section bg="secondary" position="relative">
        {/* Section contents */}
        <Flex
          gap={8}
          p={[8, null, 16]}
          direction="column"
          zIndex={2}
        >
          <Text as="h2" textStyle="heading" textAlign="center">
            MetaCamp Chronicles
          </Text>
          <Timeline />
        </Flex>
        {/* Section background */}
        <Image
          src="/assets/grassy-divider.svg"
          objectFit="cover"
          objectPosition="bottom"
          w="full"
          alt="Beach background art"
          zIndex={1}
          mt={-160}
        />
      </Section>
      {/* Section: Meet the campers */}
      <Section bg="primary">
        <Flex direction="column" gap={12}>
          <Flex direction="column" gridArea="copy" textAlign="center">
            <Text as="h2" textStyle="heading">
              Meet the campers
            </Text>
            <Text>
              Our campers are a self selected network of regenerative thinkers, digital nomads, DAO Architects, Spiritual Travelers, Solidity Dreamers, and Rabbit Hole Inspectors.
            </Text>
            <Text fontWeight="bold">Here is what they are saying about MetaCamp:</Text>
          </Flex>
          <CampersPreview /* gridArea="campers" */ />
          {/* <CamperQuote /> */}
          <Button
            as="a"
            href="#"
            gridArea="button"
            bg="white"
            color="fg"
            fontSize="xl"
            zIndex={2}
            textTransform="uppercase"
            py={8}
            px={16}
            mx={['auto', null]}
            borderRadius="2xl"
            w={['100%', 'fit-content']}
          >
            Meet some campers!
          </Button>
        </Flex>
      </Section>
      {/* Section: Representation */}
      <Section bg="primary-dark">
        {/* Section background */}
        <Image
          src="/assets/curve-bg.svg"
          objectFit="cover"
          objectPosition="top"
          w="full"
          alt="Beach background art"
          zIndex={1}
          mt="-1px" // TODO: Magic number
        />
        <Flex
          gap={[8, null, 16]}
          p={[8, null, 16]}
          direction="column"
          zIndex={2}
          w="full"
        >
          <Text as="h2" textStyle="heading" color="white" textAlign="center">
            Communities represented
          </Text>
          <Grid
            py={16}
            px={8}
            bg="fg"
            borderRadius="2xl"
            color="#6F85F2"
            placeItems="center"
          >
            <Text textAlign="center">[Community/DAO representation]</Text>
          </Grid>
        </Flex>
      </Section>
    </>
  )
}
