import { Button, Flex, Image, Input, InputGroup, Text } from '@chakra-ui/react'
import { Section } from './'

export const Footer: React.FC = () => (
  <Section bg="fg">
    <Image
      src="/assets/waves-bg.svg"
      objectFit="cover"
      objectPosition="top"
      w="full"
      alt="Beach background art"
      zIndex={1}
    />
    <Flex
      direction="column"
      gap={6}
      zIndex={2}
      alignItems="center"
      mb={[16, 24, 32]}
      mt={[-16, -24, -32]}
      px={8}
    >
      <Image
        src="/assets/chili-home.svg"
        objectFit="cover"
        objectPosition="top"
        w="80px"
        alt="Chili silhouette logo"
      />

      <Text fontFamily="body" color="white" fontWeight="normal">
        Follow us
      </Text>
      <InputGroup
        bg="white"
        borderRadius="3xl"
        mx={4}
        maxW="lg"
        h="fit-content"
        display="flex"
        gap={4}
        p="3px"
        alignItems="center"
      >
        <Input type="email" placeholder="Email" bg="none" border="none" />
        <Button
          isDisabled
          bg="primary"
          color="fg"
          borderRadius="2xl"
          py={6}
          px={10}
        >
          Newsletter me
        </Button>
      </InputGroup>
    </Flex>
  </Section>
)
