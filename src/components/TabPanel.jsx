import React, { useState } from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';

const TabPanel = ({ type, setType }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
    setType(indexToType(index));
  };

  const indexToType = (index) => {
    switch (index) {
      case 0:
        return 'clubs';
      case 1:
        return 'sports';
      case 2:
        return 'research';
      case 3:
        return 'events';
      default:
        return 'clubs';
    }
  };

  return (
    <Tabs
      index={tabIndex}
      onChange={handleTabsChange}
      variant="soft-rounded"
      colorScheme="blue"
    >
      <TabList>
        <Tab>🏫 Clubs</Tab>
        <Tab>🏅 Sports</Tab>
        <Tab>🔬 Research</Tab>
        <Tab>📅 Events</Tab>
      </TabList>
    </Tabs>
  );
};

export default TabPanel;
