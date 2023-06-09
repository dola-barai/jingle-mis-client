import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useInstructorsDetails = () => {
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/instructors')
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [instructors, refetch]
};

export default useInstructorsDetails;