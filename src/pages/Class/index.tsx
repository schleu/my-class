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
            className={`pt-20 bg-light-100 dark:bg-dark-100 min-h-screen shadow-md text-light-800 dark:text-dark-800 ${
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
