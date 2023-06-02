import { Grid } from '@chakra-ui/react'
import { CAMPER_QUOTES } from '@/constants'
import { CamperQuoteCard } from '@/components'

export const CampersPreview: React.FC = () => (
  <Grid
    templateColumns={['1fr', null, null, 'repeat(3, 1fr)']}
    gap={6}
    px={[2, 4, 8]}
  >
    {CAMPER_QUOTES.map((camper, i) => {
      const offset = i === 0 ? 20 : i === 2 ? 10 : 0
      return (
        <CamperQuoteCard key={camper.author} camper={camper} offset={offset} />
      )
    })}
  </Grid>
)
