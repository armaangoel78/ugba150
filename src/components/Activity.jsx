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
  const isEvent = type === 'events';

  return (
    <Box width="80%" p="5">
      <Grid templateColumns={{ base: '2.02fr 0.98fr' }} gap={4}>
  <GridItem colSpan={{ base: 1 }} display="flex">
    <VStack borderWidth="1px" borderRadius="lg" p="4" align="start" spacing={4} flexGrow={1}>
      <Heading>{activity.name}</Heading>
      {activity.imageUrl && <Box width="100%" height={{ base: '200px', md: '300px' }}>
          <Image
          src={activity.imageUrl}
          alt={activity.name}
          borderRadius="md"
          shadow="md"
          objectFit="cover"
          width="80%"
          height="100%"
        />
      </Box>}
      <Text>{activity.description}</Text>
    </VStack>
  </GridItem>
  <GridItem display="flex">
    <VStack borderWidth="1px" borderRadius="lg" p="4" align="start" spacing={4} minHeight="100%" flexGrow={1}>
      <Heading size="md">{isEvent ? 'Attendees' : 'Members'}</Heading>
      <VStack align="start" spacing={1}>
        <Heading size="sm">Friends</Heading>
        {activity[isEvent ? "friend_attendees" : "friend_members"].map((member, index) => (
          <Text key={index}>{member}</Text>
        ))}
        <Spacer />
        <Spacer />
        <Spacer />
        <Heading size="sm">Others</Heading>
        {activity[isEvent ? "other_attendees" : "other_members"].map((member, index) => (
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
            <Text fontWeight="bold">{isEvent ? 'Event Date:' : 'Application Deadline:'}</Text>
            <Text>{isEvent ? activity["event_date_time"] : activity["deadline"]}</Text>
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
            <Text fontWeight="bold">{isEvent ? 'Attending:' : 'Acceptance Rate:'}</Text>
            <Text>{isEvent ? activity["num_attending"] : activity["acceptance_rate"]}</Text>
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
            <Text fontWeight="bold">{isEvent ? 'Capacity:' : '# Members:'}</Text>
            <Text>{isEvent ? activity["capacity"] : activity["num_members"]}</Text>
          </VStack>
        </GridItem>
      </Grid>
      <VStack mt={8}>
        <Button colorScheme="blue" size="lg">
          {isEvent ? 'Register' : 'Apply'}
        </Button>
      </VStack>
    </Box>
  );
};

export default Activity;
