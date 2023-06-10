import { useQuery } from '@tanstack/react-query';

const useSelectedClass = () => {
  const { data: selectedClass = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['selectedClass'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/selectedClass');
      return res.json();
    },
  });

  return [selectedClass, loading, refetch];
};

export default useSelectedClass;