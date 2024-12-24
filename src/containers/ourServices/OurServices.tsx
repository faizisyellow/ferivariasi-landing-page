import React from "react";
import Box from "@/components/box";
import { data } from "./data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = () => {
  return (
    <Box
      id="LayananKami"
      title="Layanan Kami"
      backgroundColor="bg-primary text-white"
      overflowX
    >
      <Accordion
        type="single"
        collapsible
        className="w-full px-16"
      >
        {data.map((data, index) => (
          <>
            <AccordionItem
              value={index.toString()}
              key={index}
            >
              <AccordionTrigger>
                <strong>{data.label}</strong>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="ml-4 list-disc">
                  {data.items.map((item, index) => (
                    <li key={index}>{item.item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </Box>
  );
};

export default OurServices;
