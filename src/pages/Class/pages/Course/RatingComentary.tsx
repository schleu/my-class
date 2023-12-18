import { TiStarFullOutline } from "react-icons/ti";

interface iRatingComentary {
  name: string;
  picture: string;
  rating: number;
  comment: string;
}

export function RatingComentary({
  rating,
  name,
  picture,
  comment,
}: iRatingComentary) {
  return (
    <div className="w-full flex gap-2 border-b border-b-info py-6">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={picture} alt="user photo" />
      </div>

      <div className="flex flex-col">
        <p className="text-base">"{comment}"</p>

        <div className="mt-2">
          <div className="flex">
            {Array(rating)
              .fill("")
              .map((_, i) => (
                <TiStarFullOutline key={i} size={12} />
              ))}
          </div>
          <p className="text-xs">{name}</p>
        </div>
      </div>
    </div>
  );
}
