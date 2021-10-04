import { useEffect } from "react";
import { useState } from "react"


//Custom hook
const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courseInfo.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return [courses];
}
export default useCourses;