import {JSX, useContext, useMemo} from "react";
import ThemeContext from "./context/ThemeContext.ts";

import LeftSidebar from "./components/sidebar/LeftSidebar.tsx";
import Content from "./components/content/Content.tsx";


function App(): JSX.Element {
    const {currentTheme} = useContext(ThemeContext);

  useMemo(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <main className="main-container">
        <LeftSidebar/>
        <Content/>
    </main>
  );
}

export default App;
