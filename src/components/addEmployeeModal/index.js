import {useState} from 'react';

const {default: Modal} = require('../Modal');

const AddEmployeeModal = ({handleCloseAddModal, handleEmployeeAdd}) => {
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		gender: '',
		bio: '',
		avatar: 'https://robohash.org/aperiamodiodolores.jpg?size=50x50&set=set1',
		imageUrl2:
			'https://robohash.org/aperiamodiodolores.jpg?size=50x50&set=set1',
		phone: '',
	});

	const handleChange = event => {
		setFormData({
			...formData,
			[event.target.name]: event?.target?.value,
		});
	};
	const handleFormSubmit = e => {
		e?.preventDefault();
		const newData = {...formData};
		const id = Math.random() * 1000;
		newData.id = id;
		handleEmployeeAdd(newData);
	};
	return (
		<Modal closeModal={handleCloseAddModal}>
			<div className="flex flex-col gap-4">
				<div>
					<span className="text-xl font-bold">Fill The Employee Details</span>
				</div>
				<form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
					<div className="flex flex-col sm:flex-row gap-4">
						<div>
							<p className="text-xs">First Name:</p>
							<input
								onChange={handleChange}
								className="border border-gray-400 rounded-xl p-1 mt-1 shadow"
								type="text"
								maxLength={50}
								required
								placeholder="First Name"
								name="first_name"
								value={formData.first_name}
							/>
						</div>
						<div>
							<p className="text-xs">Last Name:</p>
							<input
								onChange={handleChange}
								className="border border-gray-400 rounded-xl p-1 mt-1 shadow"
								type="text"
								maxLength={50}
								required
								placeholder="Last Name"
								name="last_name"
								value={formData.last_name}
							/>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<div>
							<p className="text-xs">Email:</p>
							<input
								onChange={handleChange}
								className="border border-gray-400 rounded-xl p-1 mt-1 shadow"
								name="email"
								value={formData.email}
								type="email"
								placeholder="email"
								required
								maxLength={128}
							/>
						</div>
						<div>
							<p className="text-xs">Phone:</p>
							<input
								onChange={handleChange}
								className="border border-gray-400 rounded-xl p-1 mt-1 shadow"
								name="phone"
								value={formData.phone}
								type="tel"
								placeholder="phone"
								required
								maxLength={10}
							/>
						</div>
					</div>
					<div>
						<p className="text-xs">Image url:</p>
						<input
							onChange={handleChange}
							className="w-full border border-gray-400 rounded-xl p-1 mt-1 shadow"
							type="text"
							required
							name="avatar"
							placeholder="image url"
							value={formData.avatar}
						/>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<div>
							<p className="text-xs">Bio:</p>
							<input
								onChange={handleChange}
								className="border border-gray-400 rounded-xl p-1 mt-1 shadow"
								name="bio"
								value={formData.bio}
								type="text"
								required
								placeholder="bio"
							/>
						</div>
						<div>
							<p className="text-xs">Gender:</p>
							<select
								name="gender"
								id="gender"
								onChange={handleChange}
								className="w-[180px] border border-gray-400 rounded-xl p-1 mt-1 shadow">
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>
					</div>

					<button
						className="border shadow bg-blue-500 text-white rounded-xl py-2"
						type="submit">
						Submit
					</button>
				</form>
			</div>
		</Modal>
	);
};

export default AddEmployeeModal;
