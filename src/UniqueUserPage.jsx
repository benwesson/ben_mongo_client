import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";

export function UniqueUserPage() {
    //gets the user id from the URL parameters
    const { id } = useParams();
    const [user, setUser] = useState(null);

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
    </ChakraProvider>
  );

    return (
        <ChakraProvider>
            
        <Box textAlign="center" mt={10}>
            <Text fontSize="2xl">User Details</Text>
            <Text>ID: {user._id}</Text>
            <Text>First Name: {user.first_name}</Text>
            <Text>Last Name: {user.last_name}</Text>
            <Text>Gender: {user.gender}</Text>
        </Box>
        </ChakraProvider>
    );
}