import { useState } from "react";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../../provider/UserProvider";
import { AsideBar } from "./components/AsideBar";
import { MenuBar } from "./components/MenuBar";

export function ClassPage() {
  const [hide, setHide] = useState(true);

  return (
    <UserProvider>
      <MenuBar />
      <AsideBar hide={hide} toogleHide={() => setHide((e) => !e)} />
      <div
        className={`font-Poppins transition pt-20 ${
          hide ? "md:pl-20" : "md:pl-52"
        }`}
      >
        <Outlet />
      </div>
    </UserProvider>
  );
}
