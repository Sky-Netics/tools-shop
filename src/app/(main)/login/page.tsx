import Link from "next/link";
import PasswordField from "./_components/passwordField";

const Login = () => {
    

    return ( 
        <div className="flex justify-center">
            <div className="px-8 w-full max-w-[550px] mx-4 py-5 mt-10 rounded-lg shadow-xl text-customGray border">
                <div className="">
                    <div className="w-full mb-4">
                        <label className="bg-white" htmlFor="username">نام کاربری</label>
                        <input
                            name="username"
                            id="username"
                            type="username"
                            className="border-inputBorder w-full h-10 border px-4 mt-2 outline-customYellow shadow rounded"
                        />
                    </div>
                    <PasswordField />
                </div>
            </div>
        </div>
     );
}
 
export default Login;