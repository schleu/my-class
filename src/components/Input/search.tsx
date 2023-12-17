import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  label?: string;
  placeholder?: string;
  error?: string;
  onChange: (query: string) => void;
}

export function Search({ label, placeholder, error, onChange }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="w-full relative">
      <label htmlFor={label} className="flex flex-col w-full gap-2 relative">
        <span className="font-bold text-lg">{label}</span>

        <input
          onChange={handleInputChange}
          value={searchQuery}
          type={"text"}
          placeholder={placeholder || label}
          name={label}
          className="px-6 py-2 outline-none border border-primary rounded-md"
        />
        <div className="cursor-pointer absolute right-4 bottom-3">
          <FaSearch />
        </div>
      </label>

      <p className="text-danger text-xs px-2 h-4">{error}</p>
    </div>
  );
}
