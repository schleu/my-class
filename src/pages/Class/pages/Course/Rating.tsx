import { TiStarFullOutline } from "react-icons/ti";

import { ratingsMoked } from "../../../../moked/ratings";
import { Title } from "../../../../components/Title";

export function Rating() {
  const ratings = ratingsMoked;

  const ratingsLength = ratings.length;

  const sum = ratings.reduce((acc, act) => (acc += act.rate), 0);

  const average = sum / ratingsLength;

  const ranking = ratings.reduce(
    (acc, act) => {
      if (act.rate === 1) {
        acc[0] += 1;
      }
      if (act.rate === 2) {
        acc[1] += 1;
      }
      if (act.rate === 3) {
        acc[2] += 1;
      }
      if (act.rate === 4) {
        acc[3] += 1;
      }
      if (act.rate === 5) {
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
      <Title text="Feedback dos alunos" size="small" />

      <div className="flex flex-wrap md:flex-nowrap gap-10 justify-center items-center pl-4">
        <div className="flex flex-col">
          <h3 className="text-7xl">{average.toFixed(1)}</h3>
          <p className="text-center text-xs">{ratingsLength} avaliações</p>
        </div>

        <div className="w-full break-words flex flex-col  gap-4">
          {ranking.map((rat, idx) => (
            <div key={idx} className="w-full flex items-center gap-2">
              <div className="flex-1 h-2 relative bg-light-200 rounded-sm">
                <div
                  className="bg-info h-full rounded-sm"
                  style={{
                    width: `${percentage(rat, ratingsLength)}%`,
                  }}
                />
              </div>

              <div className="flex w-20 ">
                {Array(idx + 1)
                  .fill("")
                  .map((_, i) => (
                    <TiStarFullOutline key={i} />
                  ))}
              </div>

              <div className="text-xs w-10">
                {percentage(rat, ratingsLength)}%
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Title text="Avaliações" size="small" />

        <div className="flex flex-wrap gap-4 pl-4">
          {ratingsMoked.map((r) => (
            <RatingComentary
              key={r.id}
              rating={r.rate}
              name={r.user.name}
              picture={r.user.picture}
              comment={r.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface iRatingComentary {
  name: string;
  picture: string;
  rating: number;
  comment: string;
}

function RatingComentary({ rating, name, picture, comment }: iRatingComentary) {
  return (
    <div className="w-full flex gap-2 border-b border-b-info py-6">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={picture} alt="user photo" />
      </div>
      <div className="flex flex-col">
        <p>"{comment}"</p>
        <div className="">
          <p className="text-xs">{name}</p>
          <div className="flex w-20 ">
            {Array(rating)
              .fill("")
              .map((_, i) => (
                <TiStarFullOutline key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
