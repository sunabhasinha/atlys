import React from 'react';

interface CreatePostProps {
	openSignUpModal: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ openSignUpModal }) => {
	return (
		<div className="space-y-4 sm:w-1/3 my-4 mx-auto font-thin">
			<div className="mb-8">
				<h1 className="text-3xl">Hello Atlys</h1>
				<p className="text-light-gray mt-4">
					How are you doing today? Would you like to share something with the
					community 🤗
				</p>
			</div>
			<div className="my-4 p-4 bg-dark-gray-2 rounded-lg">
				<h2 className="text-xl">Create post</h2>
				<div
					className="mt-2 p-4 bg-dark-gray rounded-lg cursor-pointer text-light-gray"
					onClick={openSignUpModal}
				>
					How are you feeling today?
				</div>
				<div className="flex justify-end">
					<button
						className="mt-2 px-4 py-2 bg-blue-1 rounded-lg"
						onClick={openSignUpModal}
					>
						Post
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
