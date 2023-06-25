import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import darkTheme from "../../../assets/icons/dark-theme.svg";
import lightTheme from "../../../assets/icons/light-theme.svg";
// import {Theme} from "../../../types";
import {useContext} from "react";
import ThemeContext from "../../../context/ThemeContext.ts";

// interface IThemeSwitcher { currentTheme: Theme }

const ThemeSwitcher = () => {
  const {currentTheme, toggleTheme} = useContext(ThemeContext);
  const Switcher = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 1,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(0)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(28px)',
        '& .MuiSwitch-thumb:before': {
            backgroundImage: `url(${lightTheme})`,
            backgroundSize: '20px 20px',
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: currentTheme === 'light' ? '#39a1dd' : 'rgba(15,13,79,0.8)',//theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${darkTheme})`,
        backgroundSize: '20px 20px'
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20,
    },
  }));

  return (
      <>
        <Switcher onChange={() => toggleTheme()} checked={currentTheme === 'light'}/>
      </>
  );

};

export default ThemeSwitcher;