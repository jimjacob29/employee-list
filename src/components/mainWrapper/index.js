import {useEffect, useState} from 'react';
import {API_ENDPOINTS, BASE_URL} from '../../utils/constants';
import Card from '../card';
import {Bounce, toast} from 'react-toastify';
import Modal from '../Modal';
import AddEmployeeModal from '../addEmployeeModal';
import {dummyData} from '../../utils/dummyData';

const MainWrapper = () => {
	const [data, setData] = useState([]);
	const [deleteId, setDeleteId] = useState('');
	const [showAddModal, setShowAddModal] = useState(false);

	const handleAddButton = () => {
		setShowAddModal(true);
	};

	const handleCloseAddModal = () => {
		setShowAddModal(false);
	};

	const handleDelete = async id => {
		setDeleteId(id);
		const tempData = [...data];
		const filteredData = tempData.filter(data => data?.id !== id);
		setTimeout(() => {
			setData(filteredData);
		}, 100);
		try {
			const deleteResp = await fetch(
				`${BASE_URL}${API_ENDPOINTS?.getList}/${id}`,
				{
					method: 'DELETE',
				},
			);
			if (!deleteResp?.ok) {
				throw new Error('Failed to delete');
			}
			toast.success('Deleted!', {
				position: 'top-center',
				autoClose: 5000,
				closeOnClick: true,
				draggable: true,
				theme: 'dark',
				transition: Bounce,
			});
			// console.log({deleteRes});
		} catch (error) {
			toast.error('Failed to Delete!', {
				position: 'top-center',
				autoClose: 5000,
				closeOnClick: true,
				draggable: true,
				theme: 'dark',
				transition: Bounce,
			});
			setData(tempData);
			console.error({error});
		} finally {
			setDeleteId('');
		}
	};

	const handleEmployeeAdd = async newEmployee => {
		setShowAddModal(false);
		const tempData = [...data];
		setData([newEmployee, ...tempData]);
		try {
			const addEmpResp = await fetch(`${BASE_URL}${API_ENDPOINTS?.getList}`, {
				method: 'POST',
				body: JSON.stringify(newEmployee),
				headers: {
					'Content-Type': 'application/json',
				},
			});
		} catch (error) {
			console.error({error});
		}
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(`${BASE_URL}${API_ENDPOINTS?.getList}`);
				const respData = await response.json();
				setData(respData);
			} catch (error) {
				toast.error('failed To Fetch Data');
				setData(dummyData);
				console.error({error});
			}
		};
		getData();
	}, []);

	return (
		<div className=" w-full flex flex-col overflow-clip relative ">
			<div className=" sticky top-0 w-full flex justify-center bg-black p-1 z-10">
				<span className="text-yellow-400 font-bold text-xl">Employee List</span>
			</div>
			<div className=" w-full h-full overflow-hidden p-1 mt-4">
				<div className="w-full flex justify-end">
					<button
						onClick={handleAddButton}
						className="bg-green-900 py-1 px-3 text-white rounded-xl">
						Add Employee
					</button>
				</div>
				{!!data?.length ? (
					<div className="w-full h-full flex justify-center flex-wrap gap-4 overflow-auto pt-2">
						{data?.map(cardData => (
							<Card
								key={data?.id}
								data={cardData}
								handleDelete={handleDelete}
								deleteId={deleteId}
							/>
						))}
					</div>
				) : (
					<>
						<div className="w-full h-full flex justify-center items-center">
							<span>Sorry No Data Available</span>
						</div>
					</>
				)}
			</div>
			{showAddModal && (
				<AddEmployeeModal
					handleCloseAddModal={handleCloseAddModal}
					handleEmployeeAdd={handleEmployeeAdd}
				/>
			)}
		</div>
	);
};

export default MainWrapper;
