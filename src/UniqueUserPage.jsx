import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Text
  
  

} from '@chakra-ui/react'

export function UniqueUserPage() {
    //gets the user id from the URL parameters
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => setUser(null));
  }, [id]);
  //when id changes make a new fetch, could use tanstack 

  if (!user) return (
    <ChakraProvider>
      <Box textAlign="center" mt={10}>
        <Text>User not found or loading...</Text>
      </Box>
      <Box textAlign="center" mt={10}>
          
          <Button
              colorScheme="blue"
              mt={4}
              onClick={() => navigate('/')}
          >
              Go to Home
          </Button>
        </Box>
    </ChakraProvider>
  );

    return (
        
         
      <ChakraProvider>
        <Box display="flex" justifyContent="center" mt={8} >
          <TableContainer mt={10}>
            <Table variant="simple" size="md">
              <Thead>
                <Tr>
                  <Th>Field</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>ID</Td>
                  <Td>{user._id}</Td>
                </Tr>
                <Tr>
                  <Td>First Name</Td>
                  <Td>{user.first_name}</Td>
                </Tr>
                <Tr>
                  <Td>Last Name</Td>
                  <Td>{user.last_name}</Td>
                </Tr>
                <Tr>
                  <Td>Gender</Td>
                  <Td>{user.gender}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </ChakraProvider>
    )






        
       
 
}