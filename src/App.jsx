import { useEffect, useState } from 'react'
import axios from 'axios'
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
  ButtonGroup,
  Text

} from '@chakra-ui/react'

export function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }, [])

  function handleDelete(id) {
    axios.delete(`http://localhost:3000/api/users/${id}`)
      .then(() => {
       console.log("User deleted successfully")
        setUsers(users.filter(user => user._id !== id))
        //reomve user right away
      })
      .catch(err => console.log(err))
  }

  
  return (
    
    <ChakraProvider>
      <Text fontSize="2xl" textAlign="center" mt={4}>Table of Users</Text>
      <ButtonGroup display="flex" justifyContent="center" mt={4}>
        <Button colorScheme="blue" onClick={() => window.location.reload()}>Refresh</Button>
        <Button colorScheme="green" onClick={() => window.location.href = '/search'}>Search</Button>
      </ButtonGroup>
      <Box display="flex" justifyContent="center" mt={8}>
        <TableContainer>
          <Table variant="simple" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Gender</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
                <Th>Page</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(user => (
                <Tr key={user._id}>
                  <Td>{user._id}</Td>
                  <Td>{user.first_name}</Td>
                  <Td>{user.last_name}</Td>
                  <Td>{user.gender}</Td>
                  <Td><Button  onClick={() => handleDelete(user._id)}>Edit</Button></Td>
                  <Td><Button  onClick={() => handleDelete(user._id)}>Delete</Button></Td>
                  <Td><Button colorScheme="teal" onClick={() => window.location.href = `/${user._id}`}>Page</Button></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </ChakraProvider>
   
  )
}
