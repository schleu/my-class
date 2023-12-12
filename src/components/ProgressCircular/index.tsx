import { useEffect, useRef } from "react";

interface Props {
  percent: number;
}

export function ProgressCircular({ percent }: Props) {
  const refPercentage = useRef<HTMLParagraphElement>(null);
  const refInnerCircle = useRef<HTMLDivElement>(null);
  const refCircle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startValue = 0;
    const speed = 50;
    const innerCircleColor = "black";

    const progress = setInterval(() => {
      startValue++;

      if (refPercentage.current) {
        refPercentage.current.textContent = `${startValue}%`;
      }

      if (refInnerCircle.current) {
        refInnerCircle.current.style.backgroundColor = `${innerCircleColor}`;
      }

      if (refCircle.current) {
        refCircle.current.style.background = `conic-gradient(gray ${
          startValue * 3.6
        }deg, transparent 0deg)`;
      }
      if (startValue === percent) {
        clearInterval(progress);
      }
    }, speed);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={refCircle}
      className="rounded-full bg-light-200 relative w-10 h-10"
    >
      <p
        className="
              w-8 h-8 rounded-full bg-light-100
              text-sm text-light-200 flex justify-center items-center
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          "
        ref={refPercentage}
      >
        {percent}
      </p>
    </div>
  );
}
