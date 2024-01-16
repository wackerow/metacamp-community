import { Box, Flex, Grid, Link, Text } from '@chakra-ui/react'

interface TimelineItem {
  year: number
  label: string
  href: string
  src: string
}
const data: TimelineItem[] = [
  {
    year: 2021,
    label: 'Inception',
    href: 'https://poap.gallery/event/5895',
    src: 'poap-mcon-2021.png',
  },
  {
    year: 2022,
    label: 'Edition I',
    href: 'https://poap.gallery/event/37190',
    src: 'poap-metacamp-2022.png',
  },
  {
    year: 2023,
    label: 'Edition II',
    href: 'https://poap.gallery/event/125389',
    src: 'poap-metacamp-2023.png',
  },
  {
    year: 2023,
    label: 'Edition III',
    href: '', // TODO: Need link to POAP
    src: 'poap-metacamp-2023-III.jpeg',
  },
  {
    year: 2024,
    label: 'Register for IV',
    href: '#',
    src: 'poap-future.svg',
  },
]

export const Timeline: React.FC = () => {
  const poapSize = 'min(180px, 30vw)'
  const overflow = '1rem'
  return (
    <Grid
      templateAreas={{ // USE INDEX for array instead of year
        base: `
          "poap-0 label-0"
          "poap-1 label-1"
          "poap-2 label-2"
          "poap-3 label-3"
          "poap-4 label-4"
        `,
        xl: `
          "poap-0 poap-1 poap-2 poap-3 poap-4"
          "label-0 label-1 label-2 label-3 label-4"
        `,
      }}
      rowGap={{ base: 6, xl: 12}}
      columnGap={{ base: 6, xl: 12}}
    >
      {data.map(({ href, src }, i) => (
        <Box
          key={i + href}
          gridArea={`poap-${i}`} // TODO: Fix grid system
          borderRadius="full"
          w={poapSize}
          h={poapSize}
          sx={{ aspectRatio: '1' }}
          aria-label={`POAP for ${data[0].year}`}
          bgImage={`url(/assets/${src})`}
          bgSize="contain"
          position="relative"
          alignItems="center"
          _after={{
            content: `""`,
            display: i === data.length - 1 ? 'none' : 'block',
            position: 'absolute',
            left: [
              `calc(${poapSize} * 0.5 - 5px)`,
              null,
              null,
              null,
              `calc(100% - ${overflow})`,
            ],
            top: [
              `calc(100% - ${overflow})`,
              null,
              null,
              null,
              `calc(${poapSize} * 0.5 - 5px)`,
            ],
            height: { base: `calc(4 * ${overflow})`, xl: '10px' }, // TODO: Magic number
            width: { base: '10px', xl: `calc(4 * ${overflow})` },
            bg: 'secondary-dark',
            zIndex: -1,
          }}
        />
      ))}
      {data.map(({ year, label, href }, i) => (
        <Flex
          key={"label-" + href}
          gridArea={`label-${i}`}
          direction="column"
          align={{ base: 'start', xl: 'center' }}
          gap={{ base: 2, xl: 8 }}
          my="auto"
        >
          <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" fontFamily="mono">
            {year}
          </Text>
          <Link pointerEvents={href.length > 0 ? "unset": "none"} href={href} isExternal={href.startsWith('http')} data-group textDecoration="none !important">
            <Flex
              bg="white"
              borderRadius="2xl"
              py={[3, 4]}
              px={[6, 8]}
              fontSize={["sm", "md"]}
              fontWeight="bold"
              w={['full', 'fit-content']}
              justify="center"
              textAlign="center"
              _groupHover={{
                color: 'white',
                bg: 'fg',
              }}
              _groupActive={{
                outline: '2px solid var(--chakra-colors-fg)',
                color: 'fg',
                bg: 'transparent',
              }}
            >
              {label}
            </Flex>
          </Link>
        </Flex>
      ))}
    </Grid>
  )
}
