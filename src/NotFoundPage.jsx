import React from "react";
import { ChakraProvider, Box, Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

export function NotFoundPage(){
    const navigate = useNavigate();

    return (
        <ChakraProvider>
            <Box textAlign="center" mt={10}>
                <p>Page Not Found</p>
                <Button
                    colorScheme="blue"
                    mt={4}
                    onClick={() => navigate('/')}
                >
                    Go to Home
                </Button>
            </Box>
        </ChakraProvider>
    )
}