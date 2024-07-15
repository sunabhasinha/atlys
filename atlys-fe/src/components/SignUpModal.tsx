// src/components/SignUpModal.tsx

import React, { useState } from 'react';
import CustomInput from './CustomInput';

interface SignUpModalProps {
	onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ onClose }) => {
	const [isLogin, setIsLogin] = useState(false);

	const toggleLogin = () => {
		setIsLogin(!isLogin);
	};

	return (
		<div className="bg-dark-gray-2 p-6 rounded-lg shadow-lg w-96 relative font-thin">
			<h3 className="text-sm font-thin text-light-gray text-center">
				{isLogin ? 'WELCOME BACK' : 'SIGN UP'}
			</h3>
			<h2 className="mb-8 text-lg font-bold text-white-1 text-center">
				{isLogin ? 'Login into your account' : 'Create an account to continue'}
			</h2>
			<form>
				{!isLogin ? (
					<>
						<CustomInput label="Email" placeholder="Enter your email" />
						<CustomInput label="Username" placeholder="Enter your username" />
						<CustomInput
							label="Password"
							placeholder="Enter your password"
							type="password"
						/>
					</>
				) : (
					<>
						<CustomInput
							label="Email or Username"
							placeholder="Enter your email or username"
						/>

						<CustomInput
							label="Password"
							placeholder="Enter your password"
							type="password"
							forgotPassword={true}
						/>
					</>
				)}

				<button
					type="submit"
					className="w-full px-4 py-2 mb-4 font-semibold text-white-1 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
				>
					{isLogin ? 'Login now' : 'Continue'}
				</button>
			</form>
			<p className="text-sm text-left text-light-gray">
				{isLogin ? 'Not registered yet?' : 'Already have an account?'}{' '}
				<button className="text-white-1" onClick={toggleLogin}>
					{isLogin ? 'Register →' : 'Login →'}
				</button>
			</p>
			<button
				className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-white focus:outline-none"
				onClick={onClose}
			>
				<span className="sr-only">Close</span>✕
			</button>
		</div>
	);
};

export default SignUpModal;
