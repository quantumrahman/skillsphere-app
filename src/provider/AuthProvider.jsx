'use client';

import { useSession } from '@/lib/auth-client';
import AuthContext from '@/context/AuthContext';

const AuthProvider = ({ children }) => {
    const { data, isPending } = useSession();

    const values = {
        user: data?.user || null,
        loading: isPending,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
