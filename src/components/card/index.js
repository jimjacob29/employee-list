import {DeleteIcon, EmailIcon, PhoneIcon} from '../../assets/icons';

const Card = ({data, handleDelete, deleteId}) => {
	const isDeleting = deleteId === data?.id;
	return (
		<div
			className={`relative ${
				isDeleting ? 'opacity-0 ' : 'opacity-100'
			} w-[320px] min-h-20 hover:ring-2 hover:ring-[#00246B] hover:bg-blue-100 shadow rounded-xl py-2 px-4 bg-[#FFFFFF] relative translate-all duration-300 ease-in-out cursor-default`}>
			{!isDeleting && (
				<>
					{!!handleDelete && (
						<div className="absolute top-1 right-1">
							<div
								onClick={e => {
									e?.stopPropagation();
									data?.id && handleDelete(data?.id);
								}}
								className="cursor-pointer">
								<DeleteIcon className="w-4 h-4" />
							</div>
						</div>
					)}
					<div className="w-[60px] h-[60px] ">
						{data?.avatar ? (
							<img
								className="rounded-full h-full w-full object-contain"
								src={data?.avatar}
								alt="profile"
							/>
						) : (
							<div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center gap-[2px] text-neutral-600">
								{!!data?.first_name && (
									<span className="">{data?.first_name?.slice(0, 1)}</span>
								)}
								{!!data?.last_name && (
									<span className="">{data?.last_name?.slice(0, 1)}</span>
								)}
							</div>
						)}
					</div>
					<div className="text-stone-900 mt-2">
						<div className="flex items-center gap-2">
							<div className="min-w-10 flex items-center">
								<span className="text-xs">name:</span>
							</div>
							<div className="flex items-center">
								<span className="font-semibold">{`${data?.first_name ?? ''} ${
									data?.last_name ?? ''
								}`}</span>
							</div>
						</div>
						{!!data?.bio && (
							<div className="flex gap-2 items-center">
								<div className="min-w-10 flex items-center">
									<span className="text-xs">bio:</span>
								</div>
								<div className="flex items-center leading-none">
									<span className="text-xs flex items-center font-semibold">{`${
										data?.bio ?? ''
									}`}</span>
								</div>
							</div>
						)}
						<div className="mt-4">
							<span className="text-xs underline">Conatct Info:</span>
						</div>
						<div className="pl-2 pt-1 flex  gap-2">
							<a
								href={`mailto:${data?.email}`}
								target="_blank"
								rel="noopener noreferrer"
								className=" flex group items-center gap-2 w-fit cursor-pointer ">
								<div className="flex items-center">
									<EmailIcon className="w-5 h-5" />
								</div>
								<div className="w-0 opacity-0 overflow-hidden scrollbar-hidden group-hover:overflow-auto group-hover:w-[180px] group-hover:opacity-100 transition-width duration-500 ease-in-out">
									<span className="text-neutral-500 text-sm">
										{data?.email}
									</span>
								</div>
							</a>
							<a
								href={`tel:${data?.phone}`}
								target="_blank"
								rel="noopener noreferrer"
								className=" flex group items-center gap-2 cursor-pointer relative">
								<div className="flex items-center mt-[2px]">
									<PhoneIcon className="w-[18px] h-[18px]" />
								</div>
								<div className=" fixed left-[-400px] opacity-0 overflow-hidden  group-hover:opacity-100 group-hover:relative group-hover:left-0 transition-opacity duration-300 ease-in-out">
									<span className="text-neutral-500 text-sm">
										{data?.phone}
									</span>
								</div>
							</a>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Card;
