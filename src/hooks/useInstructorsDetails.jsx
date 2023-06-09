import { useQuery } from '@tanstack/react-query'


const useInstructorsDetails = () => {
    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch('https://jingle-mis-server.vercel.app/instructors')
            return res.json()
        }
    })

    return [instructors, loading, refetch]
};

export default useInstructorsDetails;