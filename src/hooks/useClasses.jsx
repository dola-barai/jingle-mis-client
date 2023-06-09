import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useClasses = () => {
    const {loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: allClasses = [] } = useQuery({
        queryKey: ['allClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/classes')
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [allClasses, refetch]
};

export default useClasses;