import { Button, Flex, Image, Text } from '@chakra-ui/react'

interface TimelineItem {
  year: number
  label: string
  href: string
  src: string
}
const data: TimelineItem[] = [
  {
    year: 2021,
    label: 'View attendees',
    href: 'https://poap.gallery/event/5895',
    src: 'poap-mcon-2021.png',
  },
  {
    year: 2022,
    label: 'View attendees',
    href: 'https://poap.gallery/event/37190',
    src: 'poap-metacamp-2022.png',
  },
  {
    year: 2023,
    label: 'View attendees',
    href: 'https://poap.gallery/event/125389',
    src: 'poap-metacamp-2023.png',
  },
  {
    year: 2024,
    label: 'Register',
    href: '#',
    src: 'poap-future.svg',
  },
]

export const Timeline: React.FC = () => {
  const poapSize = '250px'
  const overflow = '1rem'
  return (
    <Flex overflowX="scroll" gap={8} justify="center">
      {data.map(({ year, label, href, src }) => (
        <Flex
          key={href}
          direction="column"
          align="center"
          gap={8}
          position="relative"
          _after={{
            content: `""`,
            position: 'absolute',
            left: `calc(100% - ${overflow})`,
            top: `calc(${poapSize} * 0.5)`,
            height: '10px', // TODO: Magic number
            width: `calc(4 * ${overflow})`,
            bg: 'secondary-dark',
            zIndex: -1,
          }}
          _last={{ _after: { display: 'none' } }}
        >
          <Image
            borderRadius="full"
            w={poapSize}
            h={poapSize}
            alt={`POAP for ${data[0].year}`}
            src={`/assets/${src}`}
            position="relative"
            objectFit="contain"
          />
          {/* TODO: Fix year font */}
          <Text fontSize="3xl">{year}</Text>
          <Button
            as="a"
            bg="white"
            href={href}
            target={href.startsWith('http') ? '_blank' : ''}
          >
            {label}
          </Button>
        </Flex>
      ))}
    </Flex>
  )
}
