import { useState } from 'react';
import PostList from './components/PostList';
import SignUpModal from './components/SignUpModal';

function App() {
	const [showLogin, setShowLogin] = useState(true);
	const [isLogin, setIsLogin] = useState(true);
	return (
		<div className="bg-dark-gray sm:p-8 min-h-screen text-white-1 p-4 mx-0 my-auto w-full">
			{showLogin ? (
				<div className="flex justify-center items-center min-h-screen">
					<SignUpModal
						isLogin={isLogin}
						toggleLogin={() => setIsLogin((prev: boolean) => !prev)}
						handleContinue={() => {
							setShowLogin(false);
						}}
					/>
				</div>
			) : (
				<PostList />
			)}
		</div>
	);
}

export default App;
