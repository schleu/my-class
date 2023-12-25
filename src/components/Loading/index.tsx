import { Section } from "../Section";

export function Loading() {
  return (
    <Section>
      <div className="flex justify-center pt-36 gap-4 h-96 ">
        <span className="animate-[bounce_1s_50ms_infinite]">
          <div className="animate-[changeColor_5s_infinite] rounded-full h-5 w-5" />
        </span>
        <span className="animate-[bounce_1s_100ms_infinite]">
          <div className="animate-[changeColor_5s_infinite] rounded-full h-5 w-5" />
        </span>
        <span className="animate-[bounce_1s_150ms_infinite]">
          <div className="animate-[changeColor_5s_infinite] rounded-full h-5 w-5" />
        </span>
      </div>
    </Section>
  );
}
