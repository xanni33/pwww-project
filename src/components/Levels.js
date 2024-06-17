// src/components/Levels.js
import React, {useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import './Levels.css';
import BackButton from './BackButton';

const Levels = () => {
    const history = useHistory();

    // const [isMediumUnlocked, setMediumUnlocked] = useState(false);
    // const [isHardUnlocked, setHardUnlocked] = useState(false);
    //
    // useEffect(() => {
    //     if(score >= 1000){
    //         setMediumUnlocked(true);
    //     }
    //     if(score >= 2000){
    //         setHardUnlocked(true);
    //     }
    // }, [score]);

    const startGame = (level) => {
        history.push(`/game/${level}`);
    };

    return (
        <div className="levels-container">
            <BackButton />
            <h1 className="level-title">Choose a Level</h1>
            <button onClick={() => startGame('easy')}>Easy</button>
            <button onClick={() => startGame('medium')}>Medium</button>
            <button onClick={() => startGame('hard')}>Hard</button>
        </div>
    );
};

export default Levels;