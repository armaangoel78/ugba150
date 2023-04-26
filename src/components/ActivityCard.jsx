import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Image, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ActivityCard = ({ name, description, imageUrl, type, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/activity/${type}/${id}`);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={handleClick}
      cursor="pointer" // Change the cursor to pointer on hover
      transition="all 0.3s" // Set a transition for all properties
      _hover={{
        transform: 'scale(1.02)', // Increase the scale slightly on hover
        boxShadow: 'xl', // Add a larger boxShadow on hover
      }}
      _active={{
        transform: 'scale(0.98)', // Decrease the scale slightly on click (mousedown)
      }}
    >
      <Image
        src={imageUrl}
        alt={name}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      <VStack p="6" align="start">
        <Text fontWeight="bold">{name}</Text>
        <Text>{description}</Text>
      </VStack>
    </Box>
  );
};

export default ActivityCard;
