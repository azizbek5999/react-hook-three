import React, { createContext } from 'react';
import { ThemeContent } from '../index';

export const ThemeContext = createContext(null);

const user = {
    name: 'azizbeldev',
    age: 23
}

export default function ThemeContentProvider ({children}) {
    return <ThemeContent.Provider value={user}> {children} 
    </ThemeContent.Provider>
}