import React, { useState } from "react";

export const StudentForm = ({ setStudents }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [image, setImage] = useState("0");

	const dataReset = () => {
		setName("");
		setEmail("");
		setImage("");
	};
	const getId = () => {
		return Math.round(Math.random() * 1000);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, image);
		if (!name || !email || !image) {
			alert("please Fill The Data!!");
		} else {
			const newStudent = { iD: getId(), name, email, image };
			setStudents((prev) => [...prev, newStudent]);
			dataReset();
		}
	};

	return (
		<>
			<h1 className='text-center text-3xl font-extrabold mb-16'>
				STUDENT FORM
			</h1>
			<form
				onSubmit={handleSubmit}
				className='w-full h-96 flex justify-center '>
				<div className='Container w-3/5 h-full border border-slate-700 py-8 px-20 '>
					<div className=' w-full  flex items-center justify-evenly  my-2 py-4'>
						<label
							htmlFor='name'
							className=''>
							Name :
						</label>
						<input
							className='w-4/5 p-2 border border-slate-700 rounded-lg'
							type='text'
							name='name'
							id='name'
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div className='w-full  flex items-center justify-evenly  my-2 py-4 '>
						<label htmlFor='email'>Email :</label>
						<input
							className='w-4/5 p-2 border border-slate-700 rounded-lg'
							type='text'
							name='email'
							id='email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className='w-full  flex items-center justify-evenly  my-2 py-4 '>
						<label htmlFor='image'>Photo :</label>
						<select
							className='w-4/5 py-2 border  border-slate-700 rounded-lg'
							name='image'
							id='image'
							value={image}
							onChange={(e) => {
								setImage(e.target.value);
							}}>
							<option value=''>Select Photo</option>
							<option value='https://cdn.pixabay.com/photo/2019/06/22/18/30/woman-4292200_1280.jpg'>
								Couple
							</option>
							<option value='https://cdn.pixabay.com/photo/2023/03/28/17/34/girl-7883816_1280.jpg'>
								Windo
							</option>
							<option value='https://cdn.pixabay.com/photo/2022/04/06/11/30/girl-7115394_1280.jpg'>
								Camera
							</option>
							<option value='https://cdn.pixabay.com/photo/2017/02/26/02/37/girl-2099363_1280.jpg'>
								Red Hair
							</option>
							<option value='https://cdn.pixabay.com/photo/2022/11/08/06/26/woman-7577808_1280.jpg'>
								Red Shirt
							</option>
							<option value='https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759_1280.jpg'>
								Back view
							</option>
						</select>
					</div>
					<div className='btn  w-1/3 flex justify-center'>
						<button
							type='submit'
							className=' border bg-slate-400 rounded-lg px-16 py-4  hover:border-gray-950'>
							Click
						</button>
					</div>
				</div>
			</form>
		</>
	);
};
