/**
 * Array of mock post data for the feed.
 * Each post object contains:
 * @property {number} id - Unique identifier for the post
 * @property {string} author - Name of the post author
 * @property {string} avatar - Emoji representing the author's avatar
 * @property {string} time - Time since the post was created
 * @property {string} content - The main text content of the post
 * @property {string} image - URL of the image associated with the post
 * @property {number} commentsCount - Number of comments on the post
 */

export const posts = [
	{
		id: 1,
		author: 'Theresa Webb',
		avatar: '😁',
		time: '5 mins ago',
		content:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		image:
			'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600',
		commentsCount: 24,
	},
	{
		id: 2,
		author: 'Marvin McKinney',
		avatar: '😋',
		time: '8 mins ago • Edited',
		content:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		image:
			'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		commentsCount: 18,
	},
	{
		id: 3,
		author: 'Savannah Nguyen',
		avatar: '🙄',
		time: '10 mins ago',
		content:
			'Culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident.',
		image:
			'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
		commentsCount: 30,
	},
	{
		id: 4,
		author: 'Leslie Alexander',
		avatar: '😵‍💫',
		time: '15 mins ago',
		content:
			'Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=800',
		commentsCount: 15,
	},
	{
		id: 5,
		author: 'Darlene Robertson',
		avatar: '💭',
		time: '20 mins ago',
		content:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image:
			'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=800',
		commentsCount: 42,
	},
	{
		id: 6,
		author: 'Ronald Richards',
		avatar: '👍🏻',
		time: '25 mins ago',
		content:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		image:
			'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
		commentsCount: 36,
	},
];

/**
 * Text configurations related to Custom input.
 */

export const customInput = {
	forgot_password: 'Forgot password?',
};

/**
 * Text configurations for the create post component.
 */
export const createPost = {
	how_are_you_doing:
		'How are you doing today? Would you like to share something with the community 🤗',
	how_are_you_feeling: 'How are you feeling today?',
	post: 'Post',
	create_post: 'Create post',
	hello: 'Hello Atlys',
};

/**
 * Text configurations for post-related components.
 */
export const post = {
	comments: 'comments',
};

/**
 * Text configurations for the sign-up/login modal.
 * Includes labels, placeholders, and button text for various elements.
 */
export const signUpModal = {
	welcome_back: 'WELCOME BACK',
	sign_up: 'SIGN UP',
	login_into_account: 'Login into your account',
	create_account: 'Create an account to continue',
	login_now: 'Login now',
	continue: 'Continue',
	register: 'Register →',
	login: 'Login →',
	close: 'Close',
	not_register: 'Not registered yet?',
	already_have_account: 'Already have an account?',
	enter_password: 'Enter your password',
	password: 'Password',
	enter_username: 'Enter your username',
	username: 'Username',
	email: 'Email',
	enter_email: 'Enter your email',
	enter_email_or_username: 'Enter your email or username',
	email_or_username: 'Email or Username',
};
