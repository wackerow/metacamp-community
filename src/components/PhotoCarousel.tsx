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
  // const bottom = useBreakpointValue({ base: '10px', md: '40%' })
  const bottom = useBreakpointValue({ base: '10px', md: '1rem' })
  const side = useBreakpointValue({ base: '30%', md: '1rem' })
  // const side = useBreakpointValue({ base: '30%', md: '10px' })
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

  return <IconButton {...props} />
}

type PhotoCarouselProps = BoxProps & PhotoProps
export const PhotoCarousel: FC<PhotoCarouselProps> = ({ photos, ...props }) => {
  const [slider, setSlider] = useState<Slider | null>(null)

  // Settings for the Slider component
  const settings: Settings = {
    // dots: true,
    // dotsClass: 'slick-dots slick-thumb',
    // arrows: true,
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
    appendDots: (dots) => (
      <Box
        position="absolute"
        bottom="10px"
        w="100%"
        display="flex"
        justifyContent="center"
      >
        <Box
          bg="white"
          borderRadius="50%"
          w="1rem"
          h="1rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="0px 0px 5px 0px rgba(0,0,0,0.75)"
        >
          {dots}
        </Box>
      </Box>
    ),
  }

  return (
    <Flex
      position="relative"
      css={slickCss}
      // overflowX="hidden"
      sx={{ aspectRatio: 16 / 9 }}
      // maxH={["30rem", null, "20rem"]}
      // overflow="hidden"
      // outline="2px solid red"
      // maxW="640px"
      h="360px"
      {...props}
    >
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {photos?.map((url) => (
          <Image
            key={url}
            src={url}
            objectFit="cover"
            objectPosition="center"
            // w="clamp(min(100%, 300px), 50%, 640px)"
            maxW="640px"
            maxH="360px"
            h="100%"
            w="100%"
            // maxH="100%"
            // maxW="100%"
            alt="Photo"
          />
        ))}
      </Slider>
    </Flex>
  )
}
