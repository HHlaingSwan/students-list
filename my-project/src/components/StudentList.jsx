import { StudentBox } from "./StudentBox";

export const StudentList = ({ students }) => {
	return (
		<>
			<h1 className='text-center text-3xl font-extrabold my-16 '>
				{" "}
				REACT STUDENTS
			</h1>
			<div className='box-container grid grid-cols-3 gap-6 p-5'>
				{students.map((st, index) => (
					<StudentBox
						key={index}
						name={st.name}
						iD={st.iD}
						image={st.image}
						email={st.email}
					/>
				))}
			</div>
		</>
	);
};
