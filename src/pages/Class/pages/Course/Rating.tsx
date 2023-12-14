import { TiStarFullOutline } from "react-icons/ti";
import { ratingCourseMoked } from "../../../../moked/courses";

export function Rating() {
  const ratings = ratingCourseMoked[0].ratings;

  const ratingsLength = ratings.length;

  const sum = ratings.reduce((acc, act) => (acc += act), 0);

  const average = sum / ratingsLength;

  const ranking = ratings.reduce(
    (acc, act) => {
      if (act === 1) {
        acc[0] += 1;
      }
      if (act === 2) {
        acc[1] += 1;
      }
      if (act === 3) {
        acc[2] += 1;
      }
      if (act === 4) {
        acc[3] += 1;
      }
      if (act === 5) {
        acc[4] += 1;
      }

      return acc;
    },
    [0, 0, 0, 0, 0]
  );

  const percentage = (n: number, total: number) =>
    ((n / total) * 100).toFixed(1);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold border-b border-primary w-fit pb-1 pr-4">
        Feedback dos alunos
      </h1>
      <div className="flex gap-10 items-center">
        <div className="flex flex-col">
          <h3 className="text-8xl">{average.toFixed(1)}</h3>
          <p className="text-center text-xs">{ratingsLength} avaliações</p>
        </div>

        <div className="w-full break-words flex flex-col gap-4">
          {ranking.map((rat, idx) => (
            <div key={idx} className="w-full flex gap-4">
              <div className="flex-1 h-4 relative bg-light-200">
                <div
                  className="bg-info h-full"
                  style={{
                    width: `${percentage(rat, ratingsLength)}%`,
                  }}
                />

                <div className="absolute right-10 top-1/2 -translate-y-1/2">
                  {percentage(rat, ratingsLength)}%
                </div>
              </div>

              <div className="flex w-20 ">
                {Array(idx + 1)
                  .fill("")
                  .map((_, i) => (
                    <TiStarFullOutline key={i} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
