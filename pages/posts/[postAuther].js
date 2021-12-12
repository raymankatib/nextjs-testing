import { useRouter } from 'next/router';
import Image from 'next/image';
export default function postAuther() {
	const router = useRouter();
	console.log(router.query.postAuther);
	const Authname = router.query.postAuther;
	return (
		<>
			<div>Author name is : {Authname}</div>
			<Image
				src="/images/profile.jpeg" // Route of the image file
				height={144} // Desired size with correct aspect ratio
				width={144} // Desired size with correct aspect ratio
				alt="Your Name"
			/>
		</>
	);
}
