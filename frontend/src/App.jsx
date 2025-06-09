import { Button, Box, Text } from "@chakra-ui/react";

function App() {

  return (
    <>
     <Box p={8}>
      <Text fontSize="2xl" className="text-red-500">Hello from Chakra UI + Tailwind CSS!</Text>
      <Button colorScheme="teal" mt={4}>
        Click Me
      </Button>
    </Box>
    </>
  )
}

export default App
