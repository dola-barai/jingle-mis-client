import { useQuery } from '@tanstack/react-query'


const useSelectedClass = () => {
    const {data: allClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['selectedClass'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/selectedClass')
            return res.json()
        }
    })
    return [allClasses, loading, refetch]
};

export default useSelectedClass;