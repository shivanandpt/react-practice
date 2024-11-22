
import LanguageToggelButton from '../../task/component/LanguageToggleButton';
import TaskList from '../../task/component/TaskList';
import ThemeToggleButton from '../../task/component/ThemeToggleButton';
import { ThemeContext } from '../ThemeContext';

import { useContext } from 'react'



const Theme = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={`container app ${theme}`}>
                <header className="header">

                </header>
                <div className="task-contianer">
                    <TaskList></TaskList>
                </div>
                <footer className="footter">
                    <ThemeToggleButton></ThemeToggleButton>
                    <LanguageToggelButton></LanguageToggelButton>
                </footer>
            </div>
        </>
    );
}

export default Theme;