import { Box, Center, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import ProfileCard from '../Components/ProfileCard/ProfileCard'

const Home: NextPage = () => {

  return (
    < Box minH="100vH" bg={useColorModeValue('gray.100', 'black')}>
      <Center px={3} display='flex' justifyContent={'center'} alignItems='center' textAlign='center' minHeight={'96vh'} className="profile-card">
        <ProfileCard />
      </Center>
    </Box>
  )
}

export default Home
