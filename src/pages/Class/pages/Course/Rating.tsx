import { TiStarFullOutline } from "react-icons/ti";

import { Title } from "../../../../components/Title";
import { ratingsMoked } from "../../../../moked/ratings";
import { RatingComentaries } from "./RatingComentaries";
import { useState } from "react";

export function Rating() {
  const [filterRate, setFilterRate] = useState(0);
  const ratings = ratingsMoked;

  const ratingsLength = ratings.length;

  const sum = ratings.reduce((acc, act) => (acc += act.rate), 0);

  const average = sum / ratingsLength;

  const rates: number[] = ratings.map((r) => r.rate);

  const ranking = rates.reduce(
    (acc, item) => {
      acc[item - 1] += 1;
      return acc;
    },
    [0, 0, 0, 0, 0]
  );

  const maxRate = rates.reduce((acc, act) => (acc > act ? acc : act));
  const minRate = rates.reduce((acc, act) => (acc < act ? acc : act));

  const getPercentage = (n: number, total: number) =>
    ((n / total) * 100).toFixed(1);

  function handleFilterRate(rate: number) {
    setFilterRate((r) => (rate === r ? 0 : rate));
  }

  return (
    <div className="flex flex-col gap-4">
      <Title text="Feedback dos alunos" size="small" />

      <div className="flex flex-wrap md:flex-nowrap gap-10 justify-center items-center pl-4">
        <div className="flex flex-col">
          <h3 className="text-7xl">{average.toFixed(1)}</h3>
          <p className="text-center text-xs">{ratingsLength} avaliações</p>
        </div>

        <div className="w-full break-words flex flex-col  gap-4">
          {ranking.map((rat, idx) => {
            const percentage = getPercentage(rat, ratingsLength);
            return (
              <div
                key={idx}
                className="w-full flex items-center gap-2 cursor-pointer"
                onClick={() => handleFilterRate(idx + 1)}
              >
                <div className="flex-1 h-2 relative bg-light-200 rounded-sm">
                  <div
                    className="bg-info h-full rounded-sm"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

                <div className="flex w-20 ">
                  {Array(idx + 1)
                    .fill("")
                    .map((_, i) => (
                      <TiStarFullOutline key={i} size={12} />
                    ))}
                </div>

                <div className="text-xs w-10 ">{percentage}%</div>
              </div>
            );
          })}
        </div>
      </div>

      <RatingComentaries
        rate={filterRate}
        maxRate={maxRate}
        minRate={minRate}
      />
    </div>
  );
}
