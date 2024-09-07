import React from "react";

export const StudentBox = ({ name, iD, image, email }) => {
	return (
		<>
			<div className='box border  p-4  w-auto h-auto rounded-lg'>
				<div className='image  w-full '>
					<img
						className='rounded-lg hover:scale-105 ease-linear duration-75'
						src={image}
						alt={name}
					/>
				</div>
				<div className='info my-1'>
					<p className='py-2'>No : {iD} </p>
					<p className='py-2'>Name : {name}</p>
					<p className='py-2'>Email : {email}</p>
				</div>
			</div>
		</>
	);
};
