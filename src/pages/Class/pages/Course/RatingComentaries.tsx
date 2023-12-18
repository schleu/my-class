import { useEffect, useState } from "react";
import { Search } from "../../../../components/Input";
import { Title } from "../../../../components/Title";
import { ratingsMoked } from "../../../../moked/ratings";
import { RatingComentary } from "./RatingComentary";

interface Props {
  minRate?: number;
  maxRate?: number;
  rate?: number;
}

export function RatingComentaries({ rate, minRate = 1, maxRate = 5 }: Props) {
  const [filteredRatings, setFilteredRatings] = useState(ratingsMoked);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let ratings = [...ratingsMoked];

    if (rate && rate >= minRate && rate <= maxRate) {
      ratings = ratings.filter((r) => r.rate === rate);
    }

    if (filter !== "") {
      ratings = ratings.filter(
        (r) =>
          r.user.name.toLowerCase().includes(filter) ||
          r.comment.toLowerCase().includes(filter)
      );
    }

    setFilteredRatings(ratings);
  }, [filter, rate, minRate, maxRate]);

  function handle(e: string) {
    setFilter(e.toLowerCase());
  }

  return (
    <div className="flex flex-col gap-4">
      <Title text="Avaliações" size="small" />

      <div className="">
        <Search onChange={handle} placeholder="Pesquisar" />
      </div>

      <div className="flex flex-wrap gap-4 pl-4">
        {filteredRatings.map((r) => (
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
  );
}
