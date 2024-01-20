"use client"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscError } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setError("Todos los campos son obligatorios");
            setEmail("")
            setPassword("")
            return
        }

        if (email.length < 4) {
            setError("El nombre de usuario debe tener al menos 4 caracteres");
            setEmail("")
            setPassword("")
            return
        }
        if (password.length < 8) {
            setError("La contraseña debe tener al menos 8 caracteres");
            setEmail("")
            setPassword("")
            return
        }

        if (email !== "admin@gmail.com") {
            setEmail("")

            setError("Usuario incorrecto");
            return;
        }

        if (password !== "123456789") {

            setPassword("")
            setError("Contraseña Incorrecta");
            return;
        }

        else {
            router.push("/home")
        }

    };

    return (
        <div className="bg-black flex justify-center">
            <div className="
  bg-black w-full text-white flex flex-col items-center justify-start min-h-screen
  md:flex-row md:bg-black md:w-full md:h-screen md:items-start md:relative
  ">
                <section className="
             bg-gray-900 p-1 flex flex-col mt-12 rounded-md shadow-white w-5/6 
             md:bg-black md:w-3/4 md:mt-0 md:h-full  md:items-center md:justify-start relative
             md:hover:scale-100 md:hover:duration-0
             ">
                    <span className="
           text-sm text-white font-semibold
           md:text-xl  w-full 
           ">
                        Company <span className="text-blue-600">Name</span>
                    </span>
                    <div className="
                flex items-center justify-center mt-6 p-6 flex-col gap-3
                md:p-2  md:mt-28 md:bg-gray-900 md:w-2/5 md:rounded-md shadow-md  rounded-md
                ">
                        <h1 className="
                    text-xl border-b-2 py-1 border-blue-500
                    md:text-3xl md:pb-4
                    ">
                            Iniciar Sesión
                        </h1>
                        <form className="
                    flex flex-col items-center gap-10 mt-3
                    md:w-3/4 md:gap-8 md:rounded-md md:pt-8 md:pb-1 relative  md:border-1 md:border-white"
                            onSubmit={handleSubmit}
                        >
                            <div className="
                        relative flex flex-col gap-2
                          
                         ">

                                <div className="relative ">

                                    <input
                                        type="email"
                                        id="username"
                                        placeholder="Email"
                                        name="username"
                                        className="
                                    text-black outline-none px-1 font-semibold pl-5
                                    md:p-1 md:pl-5
                                    "
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <MdEmail className="
                                size-4 absolute top-1/2 transform -translate-y-1/2 left-0 text-black
                                
                                " />
                                </div>
                            </div>
                            <div className="
                        relative flex flex-col gap-2
                        
                        ">


                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    className="
                                text-black px-1   outline-none  font-semibold pl-5
                                md:p-1 md:pl-5 md:rounded:md 
                                "
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <RiLockPasswordLine className="
                            size-4 absolute top-1/2 transform -translate-y-1/2 left-0 text-black
                            
                            " />
                            </div>


                            <label className="flex items-center text-xs w-full justify-center space-x-2 ">
                                <input type="checkbox" className="checked:bg-blue-600 checked:border-transparent" />
                                <span>Recordar usuario</span>
                            </label>
                            {error && <p className="mt-40 border-r-green-700 text-red-300 text-xs absolute md:mt-40 flex items-center justify-center "><VscError className="text-xl" />{error}</p>}
                            <button
                                type="submit"
                                className="
                            bg-blue-600 rounded-sm py-1 w-1/2 
                            md:w-1/2 md:mt-4 hover:bg-blue-900 motion-safe:hover:scale-110 motion-reduce:transform-none duration-500
                            "
                            >
                                Iniciar Sesión
                            </button>
                            <p className="text-xs flex justify-end  w-full 0 text-blue-400 bold md:ml-28 md:pr-1">Terminos y condiciones</p>
                        </form>
                    </div>
                </section>
                <div className="
            rounded-md p-2 w-5/6 mt-6 flex flex-col items-center justify-center text-center text-white
            md:bg-blue-200  md:text-black md:mt-0 md:gap-16  md:w-1/4 md:h-full
            ">
                    <Image src={"/logo.jpg"} width={300} height={200} className="md:block md:rounded-md  hidden" ></Image>
                    <div>
                        <h2 className="
                text-md font-semibold mb-2 border-b-2 py-1 border-blue-500
                md:text-xl
                ">¡Aún no tienes una cuenta?</h2>
                        <p className="text-sm mb-4">Regístrate ahora y disfruta de todos nuestros servicios.</p>
                        <button className="
                border-2 border-white py-1 px-2 text-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 hover:text-black font-bold ease-in-out
                md:border-black  md:hover:text-white
                ">
                            Registrarse
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;
