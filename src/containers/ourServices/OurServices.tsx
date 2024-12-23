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
              <AccordionTrigger>{data.label}</AccordionTrigger>
              {data.items.map((item, index) => (
                <>
                  <AccordionContent>{`${index + 1}. ${item.item}`}</AccordionContent>
                </>
              ))}
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </Box>
  );
};

export default OurServices;
