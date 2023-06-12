import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useInsClasses = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: insClasses = [] } = useQuery({
        queryKey: ['newClassIns', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/newClassIns?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [insClasses, refetch]

}
export default useInsClasses;