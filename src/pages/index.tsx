import { GetStaticProps } from 'next'
import { readdirSync } from 'fs'
import path from 'path'

import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  CampersPreview,
  PageMetadata,
  PhotoCarousel,
  Section,
  Timeline,
} from '@/components'
import { PHOTO_CAROUSEL_IMAGES_DIR } from '@/constants'
import type { PhotoProps } from '@/types'

export const getStaticProps: GetStaticProps = async () => {
  const photosPath = path.join('public', PHOTO_CAROUSEL_IMAGES_DIR)
  const photos = readdirSync(photosPath).map(
    (file) => `${PHOTO_CAROUSEL_IMAGES_DIR}/${file}`
  )
  return { props: { photos } }
}

const Home: React.FC<PhotoProps> = ({ photos }) => {
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
      <Section
        bg="primary"
        bgImage="url(/assets/sand-texture.svg)"
        bgRepeat="repeat"
      >
        {/* Section contents */}
        <Flex
          gap={[8, null, null, 12]}
          px={[8, null, null, 16]}
          py={[16, 20, 24]}
          zIndex={2}
          direction={['column', null, null, null, 'row']}
        >
          <Flex
            direction="column"
            maxW="50ch"
            textAlign={['center', null, null, null, 'start']}
            gap={4}
          >
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
          <PhotoCarousel photos={photos} />
        </Flex>
      </Section>
      {/* Wooden board sign */}
      <Section
        bg="primary"
        bgImage="url(/assets/sand-texture.svg)"
        bgRepeat="repeat"
        position="relative"
      >
        {/* Section contents */}
        <Box h="min(50vw, 50rem)" w="full" zIndex={2} pt={[2, 4, 8, 12]}>
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
              bottom: '100%',
              left: '5%',
              bgImage: 'url(/assets/bird.svg)',
              bgRepeat: 'no-repeat',
              bgSize: 'contain',
              width: '3ch',
              height: '3ch',
              fontSize: ['lg', 'xl', '3xl', '5xl'],
            }}
          >
            <Text
              fontFamily="callout"
              maxW="53ch"
              color="blackAlpha.700"
              textAlign="center"
              lineHeight="1.8"
              fontSize={['lg', 'xl', '3xl', '5xl']}
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
        <Flex gap={8} p={[8, null, 16]} direction="column" zIndex={2}>
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
          mt={[0, null, -20, -120]}
        />
      </Section>
      {/* Section: Meet the campers */}
      <Section
        bg="primary"
        bgImage="url(/assets/sand-texture.svg)"
        bgRepeat="repeat"
      >
        <Flex
          direction="column"
          gap={[12, null, 16]}
          alignItems="center"
          px={[4, 6, 8]}
        >
          <Flex
            direction="column"
            gridArea="copy"
            textAlign="center"
            maxW="70ch"
            gap={4}
          >
            <Text as="h2" textStyle="heading">
              Meet the campers
            </Text>
            <Text lineHeight="1.85">
              Our campers are a self selected network of regenerative thinkers,
              digital nomads, DAO Architects, Spiritual Travelers, Solidity
              Dreamers, and Rabbit Hole Inspectors.
            </Text>
            <Text fontWeight="bold">
              Here is what they are saying about MetaCamp:
            </Text>
          </Flex>
          <CampersPreview />
          <Box
            bgImage="url(/assets/sombrero.svg)"
            bgRepeat="no-repeat"
            aria-label="Sombrero"
            w="full"
            maxW="16rem"
            sx={{ aspectRatio: '2' }}
            bgSize="contain"
            mx="auto"
            mt={{ base: 0, lg: -32 }}
          />
          <Button
            as="a"
            href="#"
            gridArea="button"
            bg="white"
            color="fg"
            fontSize={{ base: 'md', lg: 'xl' }}
            zIndex={2}
            textTransform="uppercase"
            py={[6, null, 8]}
            px={[2, 8, 16]}
            mx={[8, 'auto']}
            borderRadius="2xl"
            w={['fit-container', 'fit-content']}
          >
            Meet some campers!
          </Button>
        </Flex>
        {/* Section background */}
        <Image
          src="/assets/footer-shore.svg"
          objectFit="cover"
          objectPosition="top"
          w="full"
          alt="Beach background art"
          zIndex={2}
        />
      </Section>
    </>
  )
}

export default Home
