import { Usethemecontext } from "../../hooks/Usethemescontex";

import "../switch/Themeswitch.css";

const Themeswitch = () => {
  // usetheme context i globelly added , now below im acessing
  const { theme, dispatch } = Usethemecontext();

  const switchtheme = () => {
    if (theme === "light") {
      dispatch({ type: "light" });
    } else {
      dispatch({ type: "dark" });
    }
    console.log(theme);
  };
  // const switchtheme = () => {
  //   const newtheme = theme === "light" ? "dark" : "light";
  //   dispatch({ type: theme });
  //   console.log(newtheme);
  // };
  return (
    <>
      <div className="container">
        <div className="themeswitch-container">
          <div className="form-check form-switch themeswitch-switch">
            <input
              className="form-check-input themeswitch-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={switchtheme}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Themeswitch;
