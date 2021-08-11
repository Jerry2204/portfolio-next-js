import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section className="bg-skill py-28" id="skills">
      <div className="container mx-auto px-10">
        <SectionTitle paragraf="Beberapa kemampuan yang saya miliki">
          Skills
        </SectionTitle>
        <div className="flex mt-20 -mx-4 flex-wrap">
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Advanced"
              image="/assets/javascript.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8">
            <SkillCard
              name="React Js"
              level="Intermediate"
              image="/assets/react.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8">
            <SkillCard
              name="Vue Js"
              level="Intermediate"
              image="/assets/vue.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8">
            <SkillCard
              name="Next Js"
              level="Beginner"
              image="/assets/nextjs-icon.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8">
            <SkillCard
              name="Laravel"
              level="Advanced"
              image="/assets/laravel.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8">
            <SkillCard
              name="Bootstrap"
              level="Advanced"
              image="/assets/bootstrap.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8">
            <SkillCard name="PHP" level="Advanced" image="/assets/php.svg" />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8">
            <SkillCard
              name="Tailwind CSS"
              level="Advanced"
              image="/assets/tailwindcss-icon.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8">
            <SkillCard
              name="Postman"
              level="Advanced"
              image="/assets/postman.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="Java"
              level="Intermediate"
              image="/assets/java.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="Flutter"
              level="Beginner"
              image="/assets/flutter.svg"
            />
          </div>
          <div className="lg:w-4/12 sm:w-6/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="Figma"
              level="Advanced"
              image="/assets/figma.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
