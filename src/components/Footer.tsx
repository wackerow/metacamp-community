import { Flex, Image, Link, Text } from '@chakra-ui/react'
import { Section } from '@/components'
import { COMMUNITIES } from '@/constants'

export const Footer: React.FC = () => (
  <Section>
    {/* Section background */}
    <Image
      src="/assets/footer-waves.svg"
      objectFit="cover"
      objectPosition="top"
      w="full"
      alt="Beach background art"
      zIndex={1}
    />
    <Flex
      gap={[8, null, 16]}
      pt={24}
      pb={32}
      px={[6, 12, 24]}
      direction="column"
      zIndex={2}
      w="full"
    >
      <Text
        as="h2"
        textStyle="heading"
        fontSize="2xl"
        color="white"
        textAlign="center"
      >
        Communities represented
      </Text>
      <Flex
        flexWrap="wrap"
        gap={[4, null, 8]}
        maxW="container.md"
        mx="auto"
        justify="center"
      >
        {COMMUNITIES.map(({ name, href, imageSrc }) => (
          <Link key={name} href={href} isExternal>
            <Image
              src={imageSrc}
              objectFit="contain"
              w={40}
              h={16}
              alt={`${name} logo`}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  </Section>
)
