import React from "react";
import Card from "../ui/Card";

const Services = () => {
  return (
    <section className="flex flex-col py-10 px-8 gap-12 sm:px-8 md:px-24 lg:px-[200px] xl:px-[320px] lg:pb-10 max-w-[1440px]">
      <Card
        image="/uiux-image.png"
        title="UIUX Design"
        badge={["UIUX", "Web Design", "Digital Product"]}
      >
        <p className="font-light">
          Our strategy focuses on user-centric design to boost productivity and
          revenue, avoiding generic solutions. We create custom, engaging
          designs that improve user interaction and foster growth, reflecting
          our dedication to personalized, user-first approaches.
        </p>
      </Card>
      <Card
        image="/branding-image.png"
        title="Branding"
        badge={["logo", "Brand Identity", "Visual Identity"]}
      >
        <p className="font-light">
          The core of a brand is reflected in the feelings stirred through
          interactions with its products. Our mission is to assist both
          established and new brands in crafting identities that authentically
          represent their real nature.
        </p>
      </Card>
      <Card
        image="/illustration-image.png"
        title="Illustration"
        badge={["Procreate", "Adobe Photoshop", "Krita"]}
      >
        <p className="font-light">
          Our method revolves around audience-oriented illustration to enhance
          visual interaction and involvement, avoiding commonplace imagery. We
          design distinctive, engaging artworks that improve observer experience
          and encourage innovation, illustrating our commitment to bespoke,
          viewer-centric creative solutions.
        </p>
      </Card>
      <Card
        image="/web-image.png"
        title="Web Development"
        badge={["Framer", "React", "Next"]}
      >
        <p className="font-light">
          Our approach focuses on user-oriented development to elevate website
          functionality and income, avoiding one-size-fits-all approaches. We
          create bespoke, adaptive websites that improve user interaction and
          stimulate expansion, showcasing our dedication to customized,
          user-priority web solutions.
        </p>
      </Card>
    </section>
  );
};

export default Services;
