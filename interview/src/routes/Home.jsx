import React from 'react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

const Home = () => {
  return (
   <div>
      <h1>Login</h1>

      <Stack width={"400px"} margin ="auto" marginTop="5%"  >
      <form action="" >
        
        <FormControl>
          <FormLabel>Data set</FormLabel>
            <Select placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
             <Input type='submit' value="Login" />
            
 
          
               </FormControl>
      
      
      </form>
      
    
    
    </Stack>

      
     
    
    </div>
  )
}

export default Home