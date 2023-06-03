import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'

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
  const overflow = '2rem'
  return (
    <Flex
      direction={['column', null, null, 'row']}
      overflow="none"
      gap={8}
      justify="center"
      maxW="100%"
    >
      {data.map(({ year, label, href, src }) => (
        <Flex
          key={href}
          direction={['row', null, null, 'column']}
          align="center"
          gap={8}
          position="relative"
          _after={{
            content: `""`,
            position: 'absolute',
            left: [
              `calc(${poapSize} * 0.5)`,
              null,
              null,
              `calc(100% - ${overflow})`,
            ],
            top: [
              `calc(100% - ${overflow})`,
              null,
              null,
              `calc(${poapSize} * 0.5)`,
            ],
            height: [`calc(4 * ${overflow})`, null, null, '10px'], // TODO: Magic number
            width: ['10px', null, null, `calc(4 * ${overflow})`],
            bg: 'secondary-dark',
            zIndex: -1,
          }}
          _last={{ _after: { display: 'none' } }}
        >
          <Box
            borderRadius="full"
            w={poapSize}
            h={poapSize}
            aria-label={`POAP for ${data[0].year}`}
            bgImage={`url(/assets/${src})`}
            bgSize="contain"
            position="relative"
          />
          {/* TODO: Fix year font */}
          <Flex
            direction="column"
            align={['start', null, null, 'center']}
            gap={[2, null, null, 8]}
            py={4}
          >
            <Text fontSize="3xl" fontWeight="bold">
              {year}
            </Text>
            <Link href={href} isExternal={href.startsWith('http')}>
              <Flex
                bg="white"
                borderRadius="2xl"
                py={4}
                px={8}
                fontSize="md"
                fontWeight="bold"
                w={['full', 'fit-content']}
                justify="center"
                textAlign="center"
              >
                {label}
              </Flex>
            </Link>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}
