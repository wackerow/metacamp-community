import { Flex, FlexProps } from '@chakra-ui/react'

export const Section: React.FC<FlexProps> = ({ bg, ...restProps }) => {
  return (
    <Flex
      as="section"
      direction="column"
      bg={bg}
      sx={{
        '&>div': {
          maxW: 'container.xl',
          mx: 'auto',
        }
      }}
      {...restProps}
    />
  )
}