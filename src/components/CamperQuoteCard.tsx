import { Box, Flex, Image, Text } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import type { CamperQuote } from '@/types'

export interface CamperQuoteProps extends FlexProps {
  camper: CamperQuote
  index: number
}
export const CamperQuoteCard: React.FC<CamperQuoteProps> = ({
  camper,
  index,
  ...props
}) => {
  const { author, association, imageSrc, quote, area } = camper
  const offset = index === 0 ? 64 : index === 3 ? 32 : 0

  return (
    <Flex
      direction="column"
      align="center"
      mt={{ base: 0, lg: offset }}
      gridArea={{ base: 'auto', lg: area }}
    >
      <Box
        borderRadius="4rem"
        boxShadow="0 0 20px 0 black"
        bg="gray.200"
        px={12}
        py={14}
        position="relative"
        _after={{
          content: `""`,
          position: 'absolute',
          top: '100%',
          left: ['45%', null, null, '25%'],
          width: '0',
          height: '0',
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderTop: '24px solid var(--chakra-colors-gray-200)',
        }}
        {...props}
      >
        <Text
          _before={{ content: 'open-quote' }}
          _after={{ content: 'close-quote' }}
          fontFamily="quote"
          color="gray.600"
          fontSize="md"
          lineHeight="2"
          fontStyle="italic"
          fontWeight="500"
        >
          {quote}
        </Text>
      </Box>
      <Flex align="center" justify="center" mt={8} gap={3}>
        <Box
          bgImage={`url('${imageSrc}')`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          w="100px"
          h="100px"
          position="relative"
          sx={{
            maskImage: "url('/assets/badge-mask.svg')",
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
          }}
          /* Badge outline stroke */
          _after={{
            content: `""`,
            position: 'absolute',
            inset: '0',
            bgImage: "url('/assets/badge-stroke.svg')",
            bgSize: 'contain',
            bgRepeat: 'no-repeat',
          }}
        />
        <Flex
          direction="column"
          justify="center"
          fontFamily="quote"
          fontStyle="italic"
        >
          <Text fontWeight="bold">{author}</Text>
          <Text _before={{ content: "'~'", me: 2 }}>{association}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
