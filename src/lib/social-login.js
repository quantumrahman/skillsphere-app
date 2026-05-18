import { authClient } from './auth-client';

export const socialLogin = async (providers) => {
    await authClient.signIn.social({
        provider: providers,
    });
};
