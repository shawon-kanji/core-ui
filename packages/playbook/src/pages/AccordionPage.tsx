import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Text, Heading } from '@shawonkanji/core-ui';
import { Showcase } from '../components';

export function AccordionPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Accordion</Heading>
        <Text color="muted" className="mt-2">Disclosure pattern for FAQs and expandable details.</Text>
      </div>

      <Showcase
        title="Single open (allowToggle)"
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
            <AccordionPanel index={0}>Design system primitives.</AccordionPanel>
          </AccordionItem>
          <AccordionItem index={1}>
            <AccordionButton index={1}>Is it accessible?</AccordionButton>
            <AccordionPanel index={1}>Keyboard and ARIA baked in.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Showcase>

      <Showcase
        title="Multiple open"
        description="Use allowMultiple to keep several expanded"
        code={`<Accordion allowMultiple defaultIndex={[0,2]}>
  {/* items */}
</Accordion>`}
      >
        <Accordion allowMultiple defaultIndex={[0, 2] as unknown as number[]}>
          <AccordionItem index={0}>
            <AccordionButton index={0}>Section A</AccordionButton>
            <AccordionPanel index={0}>Details for A.</AccordionPanel>
          </AccordionItem>
          <AccordionItem index={1}>
            <AccordionButton index={1}>Section B</AccordionButton>
            <AccordionPanel index={1}>Details for B.</AccordionPanel>
          </AccordionItem>
          <AccordionItem index={2}>
            <AccordionButton index={2}>Section C</AccordionButton>
            <AccordionPanel index={2}>Details for C.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Showcase>
    </div>
  );
}
