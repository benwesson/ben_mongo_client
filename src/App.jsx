import { useEffect, useState, useRef, finalRef} from 'react'
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
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input
  

} from '@chakra-ui/react'

export function App() {
  //modal code
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef()
  
  const [editFirst, setEditFirst] = useState([])
  const [editLast, setEditLast] = useState([])
  const [editGender, setEditGender] = useState([])



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

  function handleEdit(id) {
    axios.put(`http://localhost:3000/api/users/${id}`, {
      first_name: editFirst,
      last_name: editLast,
      gender: editGender})
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
          <Table variant="simple" colorScheme="grey">
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
                  <Td>
                    
                    <Button colorScheme='green' onClick={onOpen}>Edit</Button>
                   
                    <Modal
                      initialFocusRef={initialRef}
                      finalFocusRef={finalRef}
                      isOpen={isOpen}
                      onClose={onClose}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Edit User</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                          <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input  value = {editFirst} ref={initialRef}  placeholder='First name' onChange={e => setEditFirst(e.target.value)} />
                          </FormControl>

                          <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input  value = {editLast} placeholder='Last name' onChange={e => setEditLast(e.target.value)} />
                          </FormControl>

                          <FormControl mt={4}>
                            <FormLabel>Gender</FormLabel>
                            <Input value = {editGender} placeholder='Last name' onChange={e => setEditGender(e.target.value)} />
                          </FormControl>

                        </ModalBody>

                        <ModalFooter>
                          <Button onClick={() => handleEdit(user._id)} colorScheme='blue' mr={3}>
                            Save
                          </Button>
                          <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                
                  </Td>
                  <Td><Button  colorScheme="red" onClick={() => handleDelete(user._id)}>Delete</Button></Td>
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