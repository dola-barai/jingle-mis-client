import useEnrolledClass from "../../hooks/useEnrolledClass";

const StudentHome = () => {
    const [ enrolledClass ] = useEnrolledClass()
    return (

        <div className="ml-20 mt-16">
            <h4 className="text-3xl font-semibold mb-2">Total Enrolled Class: {enrolledClass.length}</h4>
            <img src="https://img.freepik.com/free-vector/scene-with-boy-working-computer-home_1308-43058.jpg?w=826&t=st=1686551440~exp=1686552040~hmac=80efdf9fa92020549474c8361d4c4d3fc044e14a5f75ada1ffb8cd78151efe15" alt="" />
        </div>
    );
};

export default StudentHome;