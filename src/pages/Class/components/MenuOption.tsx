import { Link } from "react-router-dom";

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  full?: boolean;
  link?: string;
  callback?: () => void;
}

export function MenuOption({
  Icon,
  title,
  full,
  link,
  callback = () => {},
}: Props) {
  const Menu = () => (
    <div
      onClick={callback}
      className={`group relative w-full flex items-center gap-4 md:gap-2 py-4 hover:brightness-50  dark:hover:brightness-110 text-light-800 dark:text-dark-800 md:text-light-300 hover:text-light-800 cursor-pointer font-bold ${
        full ? "px-2 md:px-4 justify-start" : "justify-center"
      }`}
    >
      <Icon className="w-8 md:w-5 h-8 md:h-5" />

      <p
        className={`
            text-xl md:text-base
          ${
            full
              ? "text-base flex-1"
              : `absolute top-1/2 -translate-y-1/2 -right-4 translate-x-full bg-light-200 text-light-100 rounded-md p-3 
                  hidden group-hover:block 
                  before:content-[''] before:w-3 before:h-3 before:absolute before:top-1/2 before:-translate-y-1/2 
                  before:left-0 before:-translate-x-1/2 before:rotate-45 before:bg-light-200 before:shadow-2xl `
          }`}
      >
        {title}
      </p>
    </div>
  );

  return link ? (
    <Link to={link}>
      <Menu />
    </Link>
  ) : (
    <Menu />
  );
}
