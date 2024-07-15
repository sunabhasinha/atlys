import React, { InputHTMLAttributes, useState } from 'react';
import EyeOpen from '../assets/icons/EyeOpen';
import EyeClose from '../assets/icons/EyeClose';
import { customInput } from '../config.js';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	placeholder: string;
	forgotPassword?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
	label,
	placeholder,
	forgotPassword,
	type,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	return (
		<div className="mb-4 bg-dark-gray-2 font-thin">
			<div className="flex justify-between items-center">
				<label className="block text-sm  text-white-1 mb-2" htmlFor={props.id}>
					{label}
				</label>
				{forgotPassword && (
					<button type="button" className="text-white-1 text-sm">
						{customInput.forgot_password}
					</button>
				)}
			</div>

			<div className="relative">
				<input
					className="w-full px-3 py-2 bg-dark-gray-2 text-light-gray placeholder-light-gray border-2 border-light-gray rounded-md"
					placeholder={placeholder}
					type={type === 'password' && showPassword ? 'text' : type}
					{...props}
				/>
				{type === 'password' && (
					<button
						type="button"
						onClick={togglePasswordVisibility}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
					>
						{showPassword ? <EyeOpen /> : <EyeClose />}
					</button>
				)}
			</div>
		</div>
	);
};

export default CustomInput;
