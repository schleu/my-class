import { useState } from "react";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../../provider/UserProvider";
import { AsideBar } from "./components/AsideBar";
import { MenuBar } from "./components/MenuBar";

export function ClassPage() {
  const [hide, setHide] = useState(false);

  return (
    <UserProvider>
      <MenuBar />
      <AsideBar hide={hide} toogleHide={() => setHide((e) => !e)} />
      <div
        className={`font-Poppins transition pt-20 ${hide ? "pl-20" : "pl-72"}`}
      >
        <Outlet />
      </div>
    </UserProvider>
  );
}
