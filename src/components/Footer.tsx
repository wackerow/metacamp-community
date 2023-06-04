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
      pt={8}
      pb={32}
      px={[6, 12, 24]}
      direction="column"
      zIndex={2}
      w="full"
    >
      <Text as="h2" textStyle="heading" color="white" textAlign="center">
        Communities represented
      </Text>
      <Flex
        flexWrap="wrap"
        gap={12}
        maxW="container.md"
        mx="auto"
        justify="center"
      >
        {COMMUNITIES.sort(() => Math.random() - 0.5).map(({ name, href, imageSrc }) => (
          <Link key={name} href={href} isExternal>
            <Image
              src={imageSrc}
              objectFit="contain"
              w={48}
              h={16}
              alt={`${name} logo`}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  </Section>
)
