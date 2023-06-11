import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClass = () => {
        const { user, loading } = useAuth();
        // const token = localStorage.getItem('access-token');
        const [axiosSecure] = useAxiosSecure();
        const { refetch, data: enrolledClass = [] } = useQuery({
            queryKey: ['payments', user?.email],
            enabled: !loading,
            queryFn: async () => {
                const res = await axiosSecure(`/payments?email=${user?.email}`)
                console.log('res from axios', res)
                return res.data;
            },
        })
    
        return [enrolledClass, refetch]
};

export default useEnrolledClass;