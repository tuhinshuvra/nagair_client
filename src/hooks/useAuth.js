import { useContext } from 'react';
import { AllContext } from './ContextData';

const useAuth = () => {
    const auth = useContext(AllContext)
    return auth;
};

export default useAuth;