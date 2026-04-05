import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";

function blockRenderer(block, index) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.info-block":
      return <InfoBlock {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}