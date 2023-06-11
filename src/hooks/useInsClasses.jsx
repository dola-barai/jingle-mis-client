import { useQuery } from '@tanstack/react-query'


const useInsClasses = () => {
    const {data: instructorAddClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['newClass'],
        queryFn: async() => {
            const res = await fetch('https://jingle-mis-server.vercel.app/newClass')
            return res.json()
        }
    })

    return [instructorAddClasses, loading, refetch]
};

export default useInsClasses;