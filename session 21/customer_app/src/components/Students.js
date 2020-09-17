import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
        id,
        name,
        email,
        age
    }
  }
`;
const ADD_STUDENT = gql`
mutation AddStudent($id: Int!, $email: String!, $age: Int!, $name: String!) {
    addStudent(
        input: {id: $id, name: $name, email: $email, age: $age}
    ) {
      id
      name
    }
  }
`;

function Students() {
    const { loading, error, data } = useQuery(GET_STUDENTS);

    const [addStd] = useMutation(ADD_STUDENT);

    if (loading)
        return <h1>Loading ...</h1>

    if (error)
        return <h1>Error</h1>

    const { students } = data;

    return (
        <div>
            <h1>Student List</h1>
            <table border="2" width="500">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(std => {
                            return (<tr key={std.id}>
                                <td>{std.name}</td>
                                <td>{std.age}</td>
                                <td>{std.email}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <button onClick={()=>
                addStd({ variables: {
                    id:5, email:"aqsa@gmail.com", age:23, name:"Student 1"}})
            }>
                Add Students</button>
        </div>
    );
}

export default Students;
