import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Spacer,
  Grid,
  GridItem,
  Button,
  AspectRatio
} from '@chakra-ui/react';
import activities from '../activities.json';

const Activity = () => {
  const { type, id } = useParams();
  const activity = activities[type][id];

  return (
    <Box width="80%" p="5">
      <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={4}>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <VStack borderWidth="1px" borderRadius="lg" p="4" align="start" spacing={4}>
            <Heading>{activity.name}</Heading>
            <AspectRatio ratio={4 / 3} maxW="100%">
              <Image
              width="100%"
                src={activity.imageUrl}
                alt={activity.name}
                borderRadius="md"
                shadow="md"
                objectFit="cover"
              />
            </AspectRatio>
            <Text>{activity.description}</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack borderWidth="1px" borderRadius="lg" p="4" align="start" spacing={4} minHeight="100%">
            <Heading size="md">Members</Heading>
            <VStack align="start" spacing={1}>
              <Heading size="sm">Friends</Heading>
              {activity["friend_members"].map((member, index) => (
                <Text key={index}>{member}</Text>
              ))}
              <Spacer />
              <Spacer />
              <Spacer />
              <Heading size="sm">Others</Heading>
              {activity["other_members"].map((member, index) => (
                <Text key={index}>{member}</Text>
              ))}
            </VStack>
          </VStack>
        </GridItem>
      </Grid>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4} mt={4}>
        <GridItem>
          <VStack
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            align="start"
            spacing={2}
          >
            <Text fontWeight="bold">Acceptance Rate:</Text>
            <Text>{activity["acceptance_rate"]}</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            align="start"
            spacing={2}
          >
            <Text fontWeight="bold">Application Deadline:</Text>
            <Text>{activity["deadline"]}</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            align="start"
            spacing={2}
          >
            <Text fontWeight="bold">Number of Members:</Text>
            <Text>{activity["num_members"]}</Text>
          </VStack>
        </GridItem>
      </Grid>
      <VStack mt={8}>
        <Button colorScheme="blue" size="lg">
          Apply
        </Button>
      </VStack>
    </Box>
  );
};

export default Activity;
