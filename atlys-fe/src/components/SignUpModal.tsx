import React from 'react';
import CustomInput from './CustomInput';
import { signUpModal } from '../config.js';

interface SignUpModalProps {
	onClose?: () => void;
	isLogin: boolean;
	toggleLogin: () => void;
	handleContinue?: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({
	onClose,
	isLogin,
	toggleLogin,
	handleContinue,
}) => {
	return (
		<div className="bg-dark-gray-2 p-6 rounded-lg shadow-lg w-96 relative font-thin">
			<h3 className="text-sm font-thin text-light-gray text-center">
				{isLogin ? signUpModal.welcome_back : signUpModal.sign_up}
			</h3>
			<h2 className="mb-8 text-lg font-bold text-white-1 text-center">
				{isLogin ? signUpModal.login_into_account : signUpModal.create_account}
			</h2>
			<form>
				{!isLogin ? (
					<>
						<CustomInput
							label={signUpModal.email}
							placeholder={signUpModal.enter_email}
						/>
						<CustomInput
							label={signUpModal.username}
							placeholder={signUpModal.enter_username}
						/>
						<CustomInput
							label={signUpModal.password}
							placeholder={signUpModal.enter_password}
							type="password"
						/>
					</>
				) : (
					<>
						<CustomInput
							label={signUpModal.email_or_username}
							placeholder={signUpModal.enter_email_or_username}
						/>

						<CustomInput
							label={signUpModal.password}
							placeholder={signUpModal.enter_password}
							type="password"
							forgotPassword={true}
						/>
					</>
				)}

				<button
					onClick={handleContinue}
					className="w-full px-4 py-2 mb-4 font-semibold text-white-1 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
				>
					{isLogin ? signUpModal.login_now : signUpModal.continue}
				</button>
			</form>
			<p className="text-sm text-left text-light-gray">
				{isLogin ? signUpModal.not_register : signUpModal.already_have_account}{' '}
				<button className="text-white-1" onClick={toggleLogin}>
					{isLogin ? signUpModal.register : signUpModal.login}
				</button>
			</p>
			<button
				className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-white focus:outline-none"
				onClick={onClose}
			>
				<span className="sr-only">{signUpModal.close}</span>✕
			</button>
		</div>
	);
};

export default SignUpModal;
