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
    label: 'Version 1',
    href: 'https://poap.gallery/event/37190',
    src: 'poap-metacamp-2022.png',
  },
  {
    year: 2023,
    label: 'Version 2',
    href: 'https://poap.gallery/event/125389',
    src: 'poap-metacamp-2023.png',
  },
  {
    year: 2024,
    label: 'Whitelist for V3',
    href: '#',
    src: 'poap-future.svg',
  },
]

export const Timeline: React.FC = () => {
  const poapSize = 'min(180px, 30vw)'
  const overflow = '1rem'
  return (
    <Grid
      templateAreas={{
        base: `
          "poap-2021 label-2021"
          "poap-2022 label-2022"
          "poap-2023 label-2023"
          "poap-2024 label-2024"
        `,
        lg: `
          "poap-2021 poap-2022 poap-2023 poap-2024"
          "label-2021 label-2022 label-2023 label-2024"
        `,
      }}
      rowGap={{ base: 6, lg: 12}}
      columnGap={{ base: 6, lg: 12}}
    >
      {data.map(({ year, href, src }, i) => (
        <Box
          key={i + href}
          gridArea={`poap-${year}`}
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
              `calc(100% - ${overflow})`,
            ],
            top: [
              `calc(100% - ${overflow})`,
              null,
              null,
              `calc(${poapSize} * 0.5 - 5px)`,
            ],
            height: { base: `calc(4 * ${overflow})`, lg: '10px' }, // TODO: Magic number
            width: { base: '10px', lg: `calc(4 * ${overflow})` },
            bg: 'secondary-dark',
            zIndex: -1,
          }}
        />
      ))}
      {data.map(({ year, label, href }) => (
        <Flex
          key={"label-" + href}
          gridArea={`label-${year}`}
          direction="column"
          align={{ base: 'start', lg: 'center' }}
          gap={{ base: 2, lg: 8 }}
          my="auto"
        >
          <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" fontFamily="mono">
            {year}
          </Text>
          <Link href={href} isExternal={href.startsWith('http')} data-group textDecoration="none !important">
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
