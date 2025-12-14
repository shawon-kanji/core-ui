import { useState } from 'react';
import {
  Button,
  Modal,
  Tooltip,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Progress,
  Input,
  HStack,
  VStack,
  Text,
} from '@shawonkanji/core-ui';
import { Showcase, PropsTable } from '../components';

export function PrimitivesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(45);

  return (
    <div className="space-y-10">
      <Showcase
        title="Modal"
        description="Accessible dialog with header, body, and optional footer actions."
        code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm action"
  description="Modals trap focus and close on escape/click outside."
  footer={(
    <div className="flex justify-end gap-3">
      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)}>Confirm</Button>
    </div>
  )}
>
  Body content here
</Modal>`}
      >
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Confirm action"
          description="Modals close on escape or backdrop click."
          footer={(
            <div className="flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button onClick={() => setModalOpen(false)}>Confirm</Button>
            </div>
          )}
        >
          <p className="text-sm text-gray-700">
            Use the modal to interrupt the flow for confirmations or forms. It supports keyboard dismissal.
          </p>
        </Modal>
      </Showcase>

      <Showcase
        title="Tooltip"
        description="Hover or focus to reveal contextual help."
        code={`<Tooltip label="Edit" placement="top">
  <Button variant="ghost" isIconOnly aria-label="Edit">
    ✏️
  </Button>
</Tooltip>`}
      >
        <HStack gap="lg">
          <Tooltip label="Edit item">
            <Button variant="ghost">Hover me</Button>
          </Tooltip>
          <Tooltip label="Delete" placement="bottom">
            <Button variant="ghost" color="error">Danger</Button>
          </Tooltip>
          <Tooltip label="Top aligned" placement="top">
            <Button variant="ghost">Top</Button>
          </Tooltip>
        </HStack>
      </Showcase>

      <Showcase
        title="Tabs"
        description="Switch content without leaving the page; arrow keys navigate tabs and skip disabled ones."
        code={`<Tabs defaultIndex={0}>
  <TabList>
    <Tab index={0}>Profile</Tab>
    <Tab index={1} disabled>Billing (disabled)</Tab>
    <Tab index={2}>Usage</Tab>
    <Tab index={3}>Settings</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>Profile content</TabPanel>
    <TabPanel index={1}>Billing content</TabPanel>
    <TabPanel index={2}>Usage content</TabPanel>
    <TabPanel index={3}>Settings content</TabPanel>
  </TabPanels>
</Tabs>`}
      >
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab index={0}>Profile</Tab>
            <Tab index={1} disabled>Billing (disabled)</Tab>
            <Tab index={2}>Usage</Tab>
            <Tab index={3}>Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}>
              <Text size="sm" color="muted">Manage your personal info and preferences. Try pressing arrow keys to navigate - disabled tab will be skipped.</Text>
            </TabPanel>
            <TabPanel index={1}>
              <Text size="sm" color="muted">Update payment methods and invoices.</Text>
            </TabPanel>
            <TabPanel index={2}>
              <Text size="sm" color="muted">View API calls and consumption trends.</Text>
            </TabPanel>
            <TabPanel index={3}>
              <Text size="sm" color="muted">Configure application settings and preferences.</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Showcase>

      <Showcase
        title="Accordion"
        description="Disclosure pattern for FAQs and expandable details."
        code={`<Accordion allowToggle defaultIndex={0}>
  <AccordionItem index={0}>
    <AccordionButton index={0}>What is Core UI?</AccordionButton>
    <AccordionPanel index={0}>Design system primitives.</AccordionPanel>
  </AccordionItem>
</Accordion>`}
      >
        <Accordion allowToggle defaultIndex={0}>
          <AccordionItem index={0}>
            <AccordionButton index={0}>What is Core UI?</AccordionButton>
            <AccordionPanel index={0}>
              Core UI is a Tailwind-backed design system with tokens and headless-ready components.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem index={1}>
            <AccordionButton index={1}>Can I customize themes?</AccordionButton>
            <AccordionPanel index={1}>
              Yes. Override CSS variables for colors, spacing, radius, shadows, and typography.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem index={2}>
            <AccordionButton index={2}>Is it accessible?</AccordionButton>
            <AccordionPanel index={2}>
              Components ship with sensible ARIA roles, keyboard interactions, and focus management.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Showcase>

      <Showcase
        title="Progress"
        description="Display completion of a task with semantic colors."
        code={`<Progress value={60} showLabel color="success" />`}
      >
        <VStack gap="md" align="start" className="max-w-md">
          <Progress value={progress} showLabel color="success" />
          <Input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            aria-label="Progress value"
          />
        </VStack>
      </Showcase>

      <PropsTable
        title="Primitive Props"
        props={[
          { name: 'Modal', type: 'open, onClose, title, description, size, footer', description: 'Dialog container with header/body/footer.' },
          { name: 'Tooltip', type: 'label, placement', description: 'Hover/focus helper text.' },
          { name: 'Tabs', type: 'defaultIndex, onChange', description: 'Tabbed navigation with keyboard support.' },
          { name: 'Accordion', type: 'allowMultiple, allowToggle, defaultIndex', description: 'Expandable sections with disclosure buttons.' },
          { name: 'Progress', type: 'value, max, color, showLabel', description: 'Linear progress indicator.' },
        ]}
      />
    </div>
  );
}
