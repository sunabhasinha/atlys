// src/components/PostList.tsx

import React, { useState } from 'react';
import Modal from 'react-modal';
import SignUpModal from './SignUpModal';
import { posts } from '../config.js';
import Post from './Post';
import CreatePost from './CreatePost.js';
const PostList: React.FC = () => {
	const [isSignUpOpen, setIsSignUpOpen] = useState(false);

	const openSignUpModal = () => {
		setIsSignUpOpen(true);
	};

	const closeSignUpModal = () => {
		setIsSignUpOpen(false);
	};

	return (
		<div
			className={`min-h-screen text-white-1 p-4 mx-0 my-auto ${
				isSignUpOpen ? 'blur-sm' : ''
			}`}
		>
			<CreatePost openSignUpModal={openSignUpModal} />

			<div className="space-y-4 sm:w-1/3 w-full my-0 mx-auto">
				{posts.map((post: any) => (
					<Post {...post} openSignUpModal={openSignUpModal} />
				))}
			</div>

			<Modal
				isOpen={isSignUpOpen}
				onRequestClose={closeSignUpModal}
				contentLabel="Sign Up"
				className="fixed inset-0 flex items-center justify-center"
				overlayClassName="fixed inset-0 bg-black bg-opacity-25"
			>
				<SignUpModal onClose={closeSignUpModal} />
			</Modal>
		</div>
	);
};

export default PostList;
