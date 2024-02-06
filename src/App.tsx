import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCharacters} from './redux/marvelSlice';
import CharacterTable from './components/CharacterTable';
import {RootState} from "./interfaces/interface";

function App() {
    const dispatch = useDispatch();
    const characters = useSelector((state: RootState) => state.marvel.characters);
    const status = useSelector((state: RootState) => state.marvel.status);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchCharacters());
    }, [dispatch]);

    return (
        <div>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error loading data</p>}
            {status === 'succeeded' && (
                <div>
                    <CharacterTable characters={characters}/>
                </div>
            )}
        </div>
    );
}

export default App;
