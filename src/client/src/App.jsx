import { Button, Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <>
      <Card textAlign={'center'} w={'xl'}>
        <CardHeader>Hello Girls</CardHeader>
        <CardBody paddingBlockStart={'-2.5'}>
          <Text>View a summary of all your customers over the last month.</Text>
          <Button marginTop={'6'} colorScheme="pink">
            Click me!
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
