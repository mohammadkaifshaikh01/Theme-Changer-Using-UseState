Here’s the updated `README.md` file for your project:

---

# Theme Changer Using useState

A simple React app that allows users to toggle between light and dark themes using the `useState` hook.

## Deployed Link
Access the live app here: [Theme Changer](https://themetoggleusestate.netlify.app/)

## Features
- **Light and Dark Mode**: Toggle between light and dark themes dynamically.
- **User-Friendly Interface**: Simple and intuitive UI.
- **Responsive Design**: Works on all screen sizes.

## Installation and Setup
Follow these steps to clone and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mohammadkaifshaikh01/Theme-Changer-Using-UseState.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Theme-Changer-Using-UseState
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`.

## File Structure
```
Theme-Changer-Using-UseState/
├── src/
│   ├── App.js
│   ├── index.js
│   ├── ThemeSwitch.jsx
│   ├── index.css (optional for global styles)
│   ├── App.css (optional for additional styles)
├── package.json
├── README.md
├── .gitignore
```

## Example Code
Here’s the main component code for reference:

```jsx
import React, { useState } from 'react';

function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`container ${theme}`}>
      <h1>{theme === "light" ? "Switch To Dark Mode" : "Switch To Light Mode"}</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default ThemeSwitch;
```

## Styling
Add these styles to your `index.css` or `App.css`:

```css
body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container.light{
  height: 500px;
  width: 700px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid black;
}

.container.light h1{
  font-size: 30px;
  color: rgb(0, 0, 0);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.container.light p{
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgb(0, 0, 0);
  margin-bottom: 30px;
}



.container.dark{
  height: 500px;
  width: 700px;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

.container.dark h1{
  font-size: 30px;
  color: rgb(255, 255, 255);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.container.dark p{
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgb(255, 255, 255);
  margin-bottom: 30px;
}


button {

  font-weight: bold;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 1.1em;
  background-color: #212121;
  cursor: pointer;
  color: white;
  padding: 1em 2em;
  transition: box-shadow ease-in-out 0.3s, background-color ease-in-out 0.1s,
    letter-spacing ease-in-out 0.1s, transform ease-in-out 0.1s;
  box-shadow: 3px 3px 1px #1c1c1c, 3px 3px 10px #262626;
}



button:active {
  box-shadow: var(--hover-shadows), var(--accent) 0px 0px 30px 5px;
  background-color: var(--accent);
  transform: scale(0.95);
  color: aqua;
}

```

## Contributing
Feel free to fork this repository, make changes, and submit a pull request.

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Let me know if you'd like any additional sections or details!