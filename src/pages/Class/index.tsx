import { useState } from "react";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../../provider/UserProvider";
import { AsideBar } from "./components/AsideBar";
import { MenuBar } from "./components/MenuBar";

export function ClassPage() {
  const [hide, setHide] = useState(true);

  return (
    <UserProvider>
      <div className="bg-light-100">
        <MenuBar />
        <div className="mx-auto max-w-screen-cut">
          <AsideBar hide={hide} toogleHide={() => setHide((e) => !e)} />
          <div
            className={`transition pt-20 bg-light-100 min-h-screen shadow-md ${
              hide ? "md:pl-20" : "md:pl-52"
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </UserProvider>
  );
}
