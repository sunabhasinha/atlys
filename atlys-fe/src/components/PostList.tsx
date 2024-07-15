import React, { useState } from 'react';
import Modal from 'react-modal';
import SignUpModal from './SignUpModal';
import Post from './Post';
import CreatePost from './CreatePost.js';
import { posts } from '../config.js';

interface Post {
	id: number;
	author: string;
	avatar: string;
	time: string;
	content: string;
	image: string;
	commentsCount: number;
}
const PostList: React.FC = () => {
	const [isSignUpOpen, setIsSignUpOpen] = useState(false);
	const [isLogin, setIsLogin] = useState(false);

	const toggleLogin = () => {
		setIsLogin(!isLogin);
	};

	const openSignUpModal = () => {
		setIsSignUpOpen(true);
	};

	const closeSignUpModal = () => {
		setIsSignUpOpen(false);
	};

	return (
		<div
			className={`${
				isSignUpOpen ? 'blur-sm outline-none focus:outline-none' : ''
			}`}
		>
			<CreatePost openSignUpModal={openSignUpModal} />

			<div className="space-y-4 sm:w-1/3 w-full my-0 mx-auto">
				{posts.map((post: Post) => (
					<Post key={post.id} {...post} openSignUpModal={openSignUpModal} />
				))}
			</div>

			<Modal
				isOpen={isSignUpOpen}
				onRequestClose={closeSignUpModal}
				contentLabel="Sign Up"
				className="fixed inset-0 flex items-center justify-center"
				overlayClassName="fixed inset-0 bg-black bg-opacity-25"
			>
				<SignUpModal
					onClose={closeSignUpModal}
					isLogin={isLogin}
					toggleLogin={toggleLogin}
					handleContinue={closeSignUpModal}
				/>
			</Modal>
		</div>
	);
};

export default PostList;
