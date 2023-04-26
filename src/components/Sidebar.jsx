import React from 'react';
import { Box, VStack, Avatar, Link } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box width="20%" p="5" borderRight="1px" borderColor="gray.300">
      <VStack align="start" spacing={6}>
        <Avatar size="lg" src="https://haas.berkeley.edu/wp-content/uploads/Brandi-Pearce.jpeg"/>
        <Link href="/">Add Activity</Link>
        <Link href="#">Calendar</Link>
        <Link href="#">Profile</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
