import { useEffect } from "react";
import { useState } from "react";

const useInstructorsDetails = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => {
            setInstructors(data);
            setLoading(false)
        })
    }, [])
    return [instructors, loading]
};

export default useInstructorsDetails;