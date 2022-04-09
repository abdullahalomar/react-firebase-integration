import { useEffect, useState } from "react"

const useFirebse = () => {
    const [user, setUser] = useState({});

    useEffect(() => {

    }, []);

    const signInWithGoogle = () => {
        console.log('sign in soon');
    }

    return [user, setUser];
}

export default useFirebse;