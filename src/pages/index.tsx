import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
} from '@chakra-ui/react'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import { PageMetadata, Section, Timeline } from '@/components'

export default function Home() {
  return (
    <>
      {/* Metadata */}
      <PageMetadata
        title="MetaCamp"
        description="An IRL community experience"
      />
      {/* Section: Hero */}
      <Section bg="fg" align="center" pt="15vmin">
        {/* Section content */}
        <Flex direction="column" gap={4} alignItems="center">
          {/* COSTA RICA text image */}
          <Image
            src="/assets/costa-rica.svg"
            width="clamp(100px, 40%, 290px)"
            height="72px" // TODO: Magic number
            alt="Costa Rica text"
            zIndex={2}
          />
          <Image
            src="/assets/title-logo.svg"
            width="clamp(200px, 90%, 800px)"
            alt="MetaCamp logo"
            zIndex={2}
          />
          <Button
            bg="primary"
            color="fg"
            fontSize="xl"
            zIndex={2}
            textTransform="uppercase"
            p={8}
            borderRadius="2xl"
            maxW="265px" // TODO: Magic number
            isDisabled
          >
            Coming soon!
          </Button>
        </Flex>
        {/* Section background */}
        <Box />
        <Image
          src="/assets/hero-bg.svg"
          objectFit="cover"
          objectPosition="left"
          w="full"
          mt="-240px" // TODO: Magic number
          alt="Beach background art"
          zIndex={1}
        />
      </Section>
      {/* Section: Activities */}
      <Section bg="primary" mt="-1px">
        {/* Section contents */}
        <Flex gap={[8, null, 16]} p={[8, null, 16]} zIndex={2}>
          <Flex direction="column" flex={1}>
            <Text as="h2" textStyle="heading">
              Activities
            </Text>
            <Text>
              Bacon ipsum dolor amet chislic alcatra bacon tail short ribs
              picanha, fatback ground round pork belly drumstick pork loin
              tongue meatloaf turkey. Sausage ball tip turkey porchetta pork
              chop. Salami pancetta shankle, ham
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
          >
            [Photo carousel]
            <Image
              src="/assets/maracas.svg"
              position="absolute"
              inset="auto -2rem -2rem auto"
              alt="Festive maracas"
              w="120px"
            />
          </Grid>
        </Flex>
        {/* Section background */}
        <Image
          src="/assets/sand-bg.svg"
          objectFit="cover"
          objectPosition="bottom"
          w="full"
          alt="Beach background art"
          zIndex={1}
          mt="-240px" // TODO: Magic number
        />
      </Section>
      {/* Section: Timeline */}
      <Section bg="secondary">
        {/* Section contents */}
        <Flex
          gap={[8, null, 16]}
          p={[8, null, 16]}
          direction="column"
          zIndex={2}
        >
          <Text as="h2" textStyle="heading">
            Timeline of POAPS
          </Text>
          <Timeline />
        </Flex>
        {/* Section background */}
        <Image
          src="/assets/grass-bg.svg"
          objectFit="cover"
          objectPosition="bottom"
          w="full"
          alt="Beach background art"
          zIndex={1}
        />
      </Section>
      {/* Section: Meet the campers */}
      <Section bg="primary">
        <Flex gap={[8, null, 16]} p={[8, null, 16]} zIndex={2}>
          <Flex direction="column" flex={1}>
            <Text as="h2" textStyle="heading">
              Meet the campers
            </Text>
            <Text mb={16}>
              Drumstick pork loin tongue meatloaf turkey. Sausage ball tip
              turkey porchetta pork chop. Salami pancetta shankle, ham
            </Text>
            <Button
              bg="white"
              color="fg"
              fontSize="xl"
              zIndex={2}
              textTransform="uppercase"
              p={8}
              borderRadius="2xl"
              w="min(100%, 265px)"
              isDisabled
            >
              View campers
            </Button>
          </Flex>
          <Grid
            flex={2}
            h="fit-container"
            bg="fg"
            borderRadius="2xl"
            color="#6F85F2"
            placeItems="center"
          >
            [Camper profiles]
          </Grid>
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
            Project representation
          </Text>
          <Grid
            flex={1}
            py={16}
            bg="fg"
            borderRadius="2xl"
            color="#6F85F2"
            placeItems="center"
            w="full"
          >
            [Community/DAO representation]
          </Grid>
        </Flex>
      </Section>
    </>
  )
}
