import { Button, Flex, Image } from '@chakra-ui/react'
// import { ConnectButton } from '@rainbow-me/rainbowkit'

export const Header: React.FC = () => {
  return (
    <Flex
      justify="space-between"
      p={6}
      > 
      <Image
        src="/assets/chili-home.svg"
        h="5rem"
        w="auto"
        alt="Chili silhouette logo"
      />
      <Flex alignItems="center" gap={4}>
        <Button isDisabled>MetaCampus</Button>
        <Button isDisabled>Campers</Button>
        {/* <ConnectButton /> */}
      </Flex>
    </Flex>
  )
}
