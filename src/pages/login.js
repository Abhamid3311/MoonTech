import RootLayout from '@/components/layouts/RootLayout';
import { Button } from 'flowbite-react';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub } from 'react-icons/ai';
import { signIn } from 'next-auth/react';
import { baseUrl } from '@/url';

const Login = () => {
    return (
        <div className='bg-lightBg text-secondary min-h-screen flex items-center justify-center'>

            <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-md p-10'>
                <h2 className='text-2xl font-bold text-primary text-center'>Login</h2>

                <div className='m-7'>
                    <Button className='bg-[#4D82E5] mb-2' onClick={() => signIn("google", {
                        callbackUrl: "http://localhost:3000/pc-builder"
                    })} >
                        <FcGoogle className="mr-2 h-7 w-7 bg-white p-1" />
                        <p className=' font-bold'> Sign in with Google </p>
                    </Button>



                    <Button color="dark" onClick={() => signIn("github", {
                        callbackUrl: `http://localhost:3000/pc-builder`
                    })}>
                        <AiOutlineGithub className="mr-2 h-7 w-7  " />
                        <p className=' font-bold'> Sign in with GitHub </p>
                    </Button>
                </div>


            </div>
        </div>
    );
};

export default Login;

Login.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};