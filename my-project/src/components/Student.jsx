import { useState } from "react";

import { studentArray } from "./data";
import { StudentList } from "./StudentList";
import { StudentForm } from "./StudentForm";

export const Student = () => {
	const [students, setStudents] = useState(studentArray);

	return (
		<>
			<StudentForm setStudents={setStudents} />
			<StudentList students={students} />
		</>
	);
};
