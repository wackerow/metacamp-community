import { Box, Flex, Image, ImageProps } from '@chakra-ui/react'
import { campers } from '../data/campers'

export const CampersPreview: React.FC<ImageProps> = (props) => {
  const SIZE = '160px' /* TODO: Magic number */
  const MAX_DISPLAY = 4
  return (
    <Flex
      overflowY={['unset', null, 'hidden']}
      gap={6}
      direction={['column', null, 'row']}
      alignItems="center"
    >
      {campers
        .sort(() => Math.random() - 0.5) // Randomize campers
        .slice(0, MAX_DISPLAY) // Only display a few
        .map(({ image }, idx) => (
          <Box
            key={image}
            bgImage={`url('/assets/campers/${image}')`}
            bgSize="cover"
            bgRepeat="no-repeat"
            w={SIZE}
            h={SIZE}
            position="relative"
            opacity={1 - (idx / MAX_DISPLAY) * 0.5}
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
            {...props}
          />
        ))}
    </Flex>
  )
}
