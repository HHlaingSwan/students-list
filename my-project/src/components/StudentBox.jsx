import React from "react";

export const StudentBox = ({ name, iD, image, email, setStudents }) => {
	const deleteFn = () => {
		setStudents((prev) => [...prev.filter((st) => st.iD !== iD)]);
	};
	return (
		<>
			<div className='box border  p-4  w-auto h-auto rounded-lg'>
				<div className='image  w-full '>
					<img
						className='rounded-lg hover:scale-105 hover:ease-linear hover:duration-200'
						src={image}
						alt={name}
					/>
				</div>
				<div className='info my-1'>
					<p className='py-2'>No : {iD} </p>
					<p className='py-2'>Name : {name}</p>
					<p className='py-2'>Email : {email}</p>
					<button
						onClick={deleteFn}
						className='py-4   bg-slate-400 rounded-lg px-16   hover:bg-red-700'>
						Delete
					</button>
				</div>
			</div>
		</>
	);
};
