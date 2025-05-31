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
  Box
} from '@chakra-ui/react'

export function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <ChakraProvider>
      <Box display="flex" justifyContent="center" mt={8}>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Gender</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(user => (
                <Tr key={user._id}>
                  <Td>{user._id}</Td>
                  <Td>{user.first_name}</Td>
                  <Td>{user.last_name}</Td>
                  <Td>{user.gender}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </ChakraProvider>
  )
}
