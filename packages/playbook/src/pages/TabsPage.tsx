import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text, Heading, HStack } from '@shawonkanji/core-ui';
import { Showcase } from '../components';

export function TabsPage() {
  const [controlledIndex, setControlledIndex] = useState(0);

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Tabs</Heading>
        <Text color="muted" className="mt-2">Switch content without leaving the page; arrow keys navigate tabs.</Text>
      </div>

      <Showcase
        title="Default"
        code={`<Tabs defaultIndex={0}>
  <TabList>
    <Tab index={0}>Profile</Tab>
    <Tab index={1}>Billing</Tab>
    <Tab index={2}>Usage</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>Profile content</TabPanel>
    <TabPanel index={1}>Billing content</TabPanel>
    <TabPanel index={2}>Usage content</TabPanel>
  </TabPanels>
</Tabs>`}
      >
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab index={0}>Profile</Tab>
            <Tab index={1}>Billing</Tab>
            <Tab index={2}>Usage</Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}><Text size="sm">Profile content</Text></TabPanel>
            <TabPanel index={1}><Text size="sm">Billing content</Text></TabPanel>
            <TabPanel index={2}><Text size="sm">Usage content</Text></TabPanel>
          </TabPanels>
        </Tabs>
      </Showcase>

      <Showcase
        title="With disabled tab"
        code={`<Tabs defaultIndex={0}>
  <TabList>
    <Tab index={0}>Enabled</Tab>
    <Tab index={1} disabled>Disabled</Tab>
    <Tab index={2}>Enabled</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>First</TabPanel>
    <TabPanel index={1}>Second</TabPanel>
    <TabPanel index={2}>Third</TabPanel>
  </TabPanels>
</Tabs>`}
      >
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab index={0}>Enabled</Tab>
            <Tab index={1} disabled>Disabled</Tab>
            <Tab index={2}>Enabled</Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}><Text size="sm">First</Text></TabPanel>
            <TabPanel index={1}><Text size="sm">Disabled panel</Text></TabPanel>
            <TabPanel index={2}><Text size="sm">Third</Text></TabPanel>
          </TabPanels>
        </Tabs>
      </Showcase>

      <Showcase
        title="Controlled"
        description="Manage active index yourself"
        code={`const [index, setIndex] = useState(0);

<Tabs defaultIndex={index} onChange={setIndex}>
  <TabList>
    <Tab index={0}>One</Tab>
    <Tab index={1}>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>Panel one</TabPanel>
    <TabPanel index={1}>Panel two</TabPanel>
  </TabPanels>
</Tabs>`}
      >
        <HStack gap="md" className="items-center">
          <button className="text-sm text-primary-600 underline" onClick={() => setControlledIndex(0)}>Go to One</button>
          <button className="text-sm text-primary-600 underline" onClick={() => setControlledIndex(1)}>Go to Two</button>
        </HStack>
        <Tabs defaultIndex={controlledIndex} onChange={setControlledIndex}>
          <TabList>
            <Tab index={0}>One</Tab>
            <Tab index={1}>Two</Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}><Text size="sm">Panel one</Text></TabPanel>
            <TabPanel index={1}><Text size="sm">Panel two</Text></TabPanel>
          </TabPanels>
        </Tabs>
      </Showcase>

      <Showcase
        title="Scrollable tab list"
        description="Use scrollable on TabList when you have many tabs"
        code={`<Tabs defaultIndex={0}>
  <TabList scrollable>
    {[...Array(12).keys()].map((i) => (
      <Tab key={i} index={i}>Tab {i + 1}</Tab>
    ))}
  </TabList>
  <TabPanels>
    {[...Array(12).keys()].map((i) => (
      <TabPanel key={i} index={i}>Content {i + 1}</TabPanel>
    ))}
  </TabPanels>
</Tabs>`}
      >
        <Tabs defaultIndex={0}>
          <TabList scrollable>
            {[...Array(12).keys()].map((i) => (
              <Tab key={i} index={i}>Tab {i + 1}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {[...Array(12).keys()].map((i) => (
              <TabPanel key={i} index={i}>
                <Text size="sm">Content {i + 1}</Text>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Showcase>
    </div>
  );
}
