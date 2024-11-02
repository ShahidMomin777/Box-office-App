import {useEffect, useState } from "react";

const usePersistedState = (initialState, sessionStorageKey) =>{
    const[state, setState] = useState(() => {
        const persistedValue =localStorage.getItem(sessionStorageKey);
        return persistedValue? JSON.parse(persistedValue):initialState
    });

    useEffect(()=>{
                   sessionStorage.setItem (sessionStorageKey, JSON.stringify(state))
                },[state, sessionStorageKey])

                return [state , setState]
}





export default function useSearchStr(){
     return usePersistedState('','searchString');
};