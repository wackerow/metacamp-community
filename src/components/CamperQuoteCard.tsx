import { Box, Flex, Text } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import type { CamperQuote } from '../../types'

export interface CamperQuoteProps extends FlexProps {
  camper: CamperQuote
}
export const CamperQuoteCard: React.FC<CamperQuoteProps> = ({ camper, ...props }) => {
  const { author, association, imageSrc, quote } = camper
  return (
    <Flex direction="column" align="center">
      <Box
        borderRadius="4rem"
        boxShadow="0 0 20px 0 black"
        bg="white"
        px={12}
        py={14}
        mx={2}
        position="relative"
        _after={{
          content: `""`,
          position: 'absolute',
          top: '100%',
          left: '42%',
          width: '0',
          height: '0',
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderTop: '24px solid white',
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
        <Flex direction="column" justify="center" fontFamily="quote" fontStyle="italic">
          <Text fontWeight="bold">{author}</Text>
          <Text _before={{ content: "'~'", me: 2 }}>{association}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}