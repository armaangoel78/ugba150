import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import TabPanel from './TabPanel';
import ActivityCard from './ActivityCard';
import activities from '../activities.json';

const AddActivity = () => {
  const [type, setType] = React.useState("clubs");

  return (
    <Box width="80%" p="5">
      <TabPanel type={type} setType={setType} />
      <SimpleGrid columns={3} spacing={10} mt={5}>
        {activities[type].map((activity, index) => (
          <ActivityCard
            key={index}
            name={activity.name}
            description={activity.description}
            imageUrl={activity.imageUrl}
            type={type}
            id={index}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AddActivity;
