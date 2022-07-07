import { createContext,useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(false);
    const handleTheme = () =>{
        console.log(darkMode);
        setDarkMode(!darkMode);
    }
    const data = {
        darkMode,
        handleTheme
    }

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext}
export default ThemeProvider