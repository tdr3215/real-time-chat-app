import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
// import { BG } from './BG';
import { Login } from '../components/Authentication/Login';
import { SignUp } from '../components/Authentication/SignUp';
export const Homepage = () => {
  return (
    <Container maxW="xl" centerContent color={'#FCFBF4'}>
      <Box
        display={'flex'}
        justifyContent={'center'}
        p={3}
        bg={'rgba(1, 5, 30,0.95)'}
        w={'100%'}
        m={'40px 0 15px 0'}
        borderRadius={'xl'}
        borderWidth={'1px'}
      >
        <Text fontSize={'4xl'} fontFamily={'space mono'}>
          Pixel Pals
        </Text>
      </Box>
      <Box
        bg={'rgba(1, 5, 30,0.95)'}
        w={'100%'}
        p={4}
        borderRadius={'lg'}
        borderWidth={'1px'}
        color={'white'}
      >
        <Tabs variant="soft-rounded">
          <TabList mb={'1em'}>
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            {' '}
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* <BG /> */}
    </Container>
  );
};
