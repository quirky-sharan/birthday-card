import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import MusicPlayer from "./MusicPlayer";
import FloatingHearts from "./FloatingHearts";
import Scene3D from "./Scene3D";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && (
        <>
          <Scene3D />
          <FloatingHearts />
        </>
      )}
      <div className="relative z-10">
        <Nav />
        <Outlet />
      </div>
      <MusicPlayer />
    </>
  );
}
