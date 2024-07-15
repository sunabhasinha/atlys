import React from 'react';
import { post } from '../config.js';

interface PostProps {
	author: string;
	id: number;
	time: string;
	content: string;
	commentsCount: number;
	avatar: string;
	image: string;
	openSignUpModal: () => void;
}

const Post: React.FC<PostProps> = ({
	author,
	time,
	content,
	commentsCount,
	avatar,
	image,
	openSignUpModal,
}) => {
	return (
		<main
			className="p-4 bg-dark-gray-2 rounded-lg cursor-pointer border-2 border-solid border-dark-gray-2 font-thin"
			onClick={openSignUpModal}
		>
			<section className="flex">
				<div className="w-[44px] h-[44px] rounded-full overflow-hidden">
					<img
						className="w-full h-full object-cover"
						alt="profile"
						src={image}
					/>
				</div>
				<div className="mx-4">
					<h3 className="text-white-1">{author}</h3>
					<p className="text-sm text-light-gray">{time}</p>
				</div>
			</section>
			<section className="p-4 bg-dark-gray rounded-md my-6">
				<div className="flex justify-between">
					<div className="bg-light-gray-2 rounded-full w-[44px] h-[44px] p-4 flex justify-center items-center">
						{avatar}
					</div>
					<p className="mx-2 text-light-gray">{content}</p>
				</div>
			</section>
			<section>
				<p></p>
				<p className="text-sm text-light-gray">
					{commentsCount} {post.comments}
				</p>
			</section>
		</main>
	);
};

export default Post;
