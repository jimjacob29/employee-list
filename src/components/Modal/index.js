const Modal = ({children, closeModal}) => {
	return (
		<div
			onClick={e => {
				e?.stopPropagation();
				closeModal && closeModal();
			}}
			className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-black bg-opacity-60">
			<div
				onClick={e => {
					e?.stopPropagation();
				}}
				className="fixed top-1/2 left-1/2 min-w-[100px] min-h-[100px] bg-blue-100 rounded-xl shadow translate-x-[-50%] translate-y-[-50%] p-4 ">
				{children}
			</div>
		</div>
	);
};

export default Modal;
