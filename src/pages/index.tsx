import { GetStaticProps } from 'next'
import { readdirSync } from 'fs'
import path from 'path'

import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import {
  CampersPreview,
  PageMetadata,
  PhotoCarousel,
  Section,
  Timeline,
} from '@/components'
import { APPLICATION_FORM_URL, PHOTO_CAROUSEL_IMAGES_DIR } from '@/constants'
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
        <Flex direction="column" gap={0} alignItems="center" zIndex={3}>
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
          <Link href={APPLICATION_FORM_URL} isExternal w="fit-content" data-group textDecoration="none !important">
            <Box
              bg="primary"
              color="fg"
              fontSize="xl"
              fontWeight="bold"
              zIndex={2}
              textTransform="uppercase"
              px={20}
              py={4}
              mt={12}
              borderRadius="2xl"
              w="min(100%, 290px)" // TODO: Magic number
              _groupHover={{
                bg: 'secondary',
              }}
              _groupActive={{
                outline: '2px solid var(--chakra-colors-secondary)',
                color: 'secondary',
                bg: 'transparent',
              }}
            >
              Register
            </Box>
          </Link>
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
          <PhotoCarousel photos={photos} display={{ base: "none", xl: "flex" }} />
        </Flex>
      </Section>
      {/* Wood board sign */}
      <Section
        bg="primary"
        bgImage="url(/assets/sand-texture.svg)"
        bgRepeat="repeat"
        position="relative"
      >
        {/* Section background */}
        <Image
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          bottom={0}
          src="/assets/wood-sign-bg.png"
          objectFit="cover"
          objectPosition="top"
          w="full"
          alt="Beach background art"
          zIndex={1}
        />
        <Image
          display={{ base: 'block', md: 'none' }}
          position="absolute"
          bottom={0}
          src="/assets/wood-sign-mobile-bg.png"
          objectFit="cover"
          objectPosition="top"
          w="full"
          alt="Beach background art"
          zIndex={1}
        />
        {/* Section contents */}
        <Flex
          direction="column"
          alignItems="center"
          h={{
            base: "min(100vh, 100rem)",
            md: "min(50vmax, 75rem)"
          }}
          w="full"
          zIndex={2}
          pt={{ base: '70vw', sm: "20vw", md: 8 }}
          mt={{ base: '-50vw', sm: '-10vw', md: 8 }}

        >
          <Box
            mx={16}
            bgImage="url(/assets/wood-texture.png)"
            bgSize="cover"
            bgRepeat="repeat"
            px={{ base: 6, sm: 12 }}
            py={8}
            w="fit-content"
            boxShadow="0px 8px 0px 3px var(--chakra-colors-blackAlpha-500)"
            zIndex={2}
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
              fontSize: { base: '3xl', lg: '5xl' },
            }}
          >
            <Text
              fontFamily="callout"
              maxW="53ch"
              color="blackAlpha.700"
              textAlign="center"
              lineHeight="1.8"
              fontSize={['3xl', '4xl', '4xl', '5xl']}
            >
              Join us for 10 days of wild ranging conversations un-conference
              sessions, playa excursions, fresh and local food prepared daily.
            </Text>
          </Box>
        </Flex>
        {/* Section foreground */}
        <Image
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          bottom={0}
          src="/assets/wood-sign-fg.png"
          objectFit="cover"
          objectPosition="bottom"
          w="full"
          alt="Beach background art"
          zIndex={3}
        />
        <Image
          display={{ base: 'block', md: 'none' }}
          position="absolute"
          bottom={0}
          src="/assets/wood-sign-mobile-fg.png"
          objectFit="cover"
          objectPosition="bottom"
          w="full"
          alt="Beach background art"
          zIndex={3}
        />
      </Section>
      {/* Section: Timeline */}
      <Section bg="secondary" position="relative">
        {/* Section contents */}
        <Flex gap={8} p={[6, 8, 16]} direction="column" zIndex={2}>
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
        pt={[8, null, 0]}
      >
        <Flex
          direction="column"
          gap={[12, null, 16]}
          alignItems="center"
          px={[6, null, 8]}
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
