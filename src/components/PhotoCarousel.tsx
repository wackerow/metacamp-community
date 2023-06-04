import { FC, useState } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import type { BoxProps, IconButtonProps } from '@chakra-ui/react'
import Slider from 'react-slick'
import type { Settings } from 'react-slick'
import { slickCss } from '@/styles/slickCss'
import type { PhotoProps } from '@/types'

interface NavIconProps {
  slider: Slider | null
  isNext?: boolean
}
const NavIcon: FC<NavIconProps> = ({ slider, isNext }) => {
  const bottom = useBreakpointValue({ base: '10px', md: '1rem' })
  const side = useBreakpointValue({ base: '30%', md: '1rem' })

  const props: IconButtonProps = {
    position: 'absolute',
    bottom,
    color: 'white',
    variant: 'outline',
    zIndex: 1,
    'aria-label': isNext ? 'Next slide' : 'Previous slide',
    icon: isNext ? <ArrowForwardIcon /> : <ArrowBackIcon />,
    onClick: () => (isNext ? slider?.slickNext() : slider?.slickPrev()),
    p: 0,
    w: '4rem',
    h: '2rem',
  }
  isNext ? (props.insetEnd = side) : (props.insetStart = side)

  return (
    <IconButton
      _active={{ outline: '2px solid white', outlineOffset: '2px' }}
      _hover={{ bg: 'whiteAlpha.500' }}
      {...props}
    />
  )
}

type PhotoCarouselProps = BoxProps & PhotoProps
export const PhotoCarousel: FC<PhotoCarouselProps> = ({ photos, ...props }) => {
  const [slider, setSlider] = useState<Slider | null>(null)

  useBreakpointValue({})
  // Settings for the Slider component
  const settings: Settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <NavIcon slider={slider} />,
    nextArrow: <NavIcon slider={slider} isNext />,
  }

  return (
    <Flex
      position="relative"
      sx={{ aspectRatio: 16 / 9 }}
      maxW="min(100%, var(--chakra-sizes-container-sm))"
      css={slickCss}
      {...props}
    >
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {photos
          ?.sort((url) =>
            url.includes('coconut.png') ? -1 : Math.random() - 0.5
          )
          .map((url) => (
            <Image
              key={url}
              src={url}
              objectFit="cover"
              objectPosition="center"
              maxW="min(100%, var(--chakra-sizes-container-sm))"
              maxH="360px"
              h="100%"
              w="100%"
              alt="Photo"
            />
          ))}
      </Slider>
    </Flex>
  )
}
