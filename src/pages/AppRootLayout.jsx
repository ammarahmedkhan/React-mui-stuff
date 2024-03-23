import * as React from 'react';
import { Outlet } from 'react-router-dom';




// TODO remove, this demo shouldn't need to reset the theme.

export default function AppRootLayout() {
  return (
      <div>
        <p>app root </p>
            <Outlet/>
      </div>
    // </ThemeProvider>
  );
}