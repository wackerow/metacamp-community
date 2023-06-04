import { Box, Grid } from '@chakra-ui/react'
import { CAMPER_QUOTES } from '@/constants'
import { CamperQuoteCard } from '@/components'

export const CampersPreview: React.FC = () => (
  <Grid
    templateAreas={{
      lg: `
      "quote-one quote-two quote-four"
      "quote-one quote-three quote-four"
      "quote-one quote-three ."
    `,
    }}
    templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
    gap={{ base: 16, lg: 6 }}
  >
    {CAMPER_QUOTES.map((camper, i) => (
      <CamperQuoteCard key={camper.author} camper={camper} index={i} />
    ))}
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
  </Grid>
)
