import { useState } from 'react'
import axios from 'axios'
import { ChakraProvider,  FormControl, IconButton, Input, Text, Flex } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
  

export function Search() {
    

    const [userID, setUserID] = useState([""])
    const [user,setUser] = useState([""])
    const handleInputChange = (e) => {
     setUserID(e.target.value);
   };
   
   const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Success")
    axios.get(`http://localhost:3000/api/users/${userID}`)
        .then(users => setUser(users.data))
        
        
        console.log(users)
      
        
   }
   
   
 
  return (
    
    
    <ChakraProvider>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <form id="userIDForm" onSubmit={handleSubmit}>
                <FormControl>
                
                    <Flex>
                        <Input
                            value={userID}
                            width='auto'
                            type="text"
                            onChange={handleInputChange}
                            placeholder="Enter A Valid User ID"
                            maxLength="25"
                            mr={2} // margin right for spacing
                        />
                        <IconButton
                            type='submit'
                            aria-label='Search database'
                            icon={<SearchIcon />}
                        />
                    </Flex>
                </FormControl>
            </form>

            
        </div>

        <div>
            <h1>{userID}</h1>
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <h1>{user.gender}</h1>
        </div>

    </ChakraProvider>
  
    
    
  )
}
