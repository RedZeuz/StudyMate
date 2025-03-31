import { useState } from "react";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const AuthPage = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4'>
			<div className='w-full max-w-md'>
				<h2 className='text-center text-3xl font-extrabold text-white mb-8'>
					{isLogin ? "Sign in to StudyMate" : "Create a StudyMate account"}
				</h2>

				<div className='bg-white shadow-xl rounded-lg p-8'>
					{isLogin ? <LoginForm /> : <SignUpForm />}

					<div className='mt-8 text-center'>
						<p className='text-sm text-gray-600'>
							{isLogin ? "New to StudyMate?" : "Already have an account?"}
						</p>

						<button
							onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
							className='mt-2 text-primary hover:text-secondary font-medium transition-colors duration-300'
						>
							{isLogin ? "Create a new account" : "Sign in to your account"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AuthPage;
