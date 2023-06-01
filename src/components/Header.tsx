import { Button, Flex, Image } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export const Header: React.FC = () => (
  <Flex justify="end" p={6}>
    <ConnectButton label="Connect your wallet" />
  </Flex>
)
