import React from 'react'
import { useState } from 'react'

function ThemeSwitch() {
   const [theme,setTheme] = useState("light")

   const toggleTheme = () =>{
      setTheme(theme === "dark" ? "light" : "dark")
   }

  return ( 
   <>
    <div className={`container ${theme}`}>
      <h1>{theme === "light" ? "Switch To Dark Mode" : "Switch To Light Mode"}</h1>
      <p>Hi Guyz I'm Mohammad Kaif </p>
      <button onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
    </div>
    </>
  )
  
}

export default ThemeSwitch



