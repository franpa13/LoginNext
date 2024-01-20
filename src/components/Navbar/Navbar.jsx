"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { TbMathGreater } from "react-icons/tb";
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [busqueda, setBusqueda] = useState('');
    const handleInputChange = (e) => {
        setBusqueda(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de la búsqueda, por ejemplo, redireccionar a una página de resultados.
        console.log('Realizar búsqueda con:', busqueda);
    };
    const apretar = () => {
        console.log("apretando el icono");
    }
    return (
        <header className='py-1 bg-black md:py-2 flex flex-wrap md:flex-nowrap text-white md:w-full md:flex items-center justify-between '>
            <div className=' w-full  flex gap-1 justify-center  items-center md:justify-start md:flex md:gap-3 md:w-1/2 md:ml-28'>
                <Image
                    src={"/imagePerfil.png"}
                    className='rounded-sm w-12 p-1 md:w-20 md:p-2 '
                    width={65}
                    height={100}
                />

                <h1 className='md:text-xl text-sm font-bold' >Francisco Paredes</h1>
                <p><TbMathGreater className='text-gray-400' /></p>
                <span className='text-gray-400 text-sm md:text-sm' >Inicio</span>
            </div>
            <div className='flex gap-0  items-center mt-2 md:mt-0 w-full md:w-1/2 md:justify-end md:mr-28'>
                <IoNotificationsOutline
                    onClick={apretar}
                    className='text-gray-400 md:mr-6 md:text-3xl cursor-pointer' />
                <div className='flex items-center gap-2'>
                    <FaSearch className='text-gray-500 md:text-xl ' />
                    <div className='flex items-center'>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                placeholder='Buscar...'
                                value={busqueda}
                                onChange={handleInputChange}
                                className='text-white font-semibold p-2 bg-black border-none outline-none'
                            />

                        </form>
                        <Image src={"/imagePerfil.png"} className='md:p-2 rounded-full' width={65} height={100} ></Image>


                    </div>

                    <button
                        onClick={() => {
                            setMenuOpen(!menuOpen)
                        }}
                        className=" flex flex-col items-center md:p-0  text-gray-400 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>

                    </button>
                    <div className='realative text-white '>
                        {menuOpen && (
                            <ul className=' absolute md:right-28  md:top-24 bg-black rounded-md'>
                                <li className=' hover:bg-slate-600  px-8 py-2'>
                                    <Link href={"/profile"}>
                                        Ver Perfil
                                    </Link>
                                </li>

                                <li className='px-8 hover:bg-slate-600 py-2 '>
                                    <Link href={"/"}>
                                        Cerrar Sesion
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                </div>

            </div>
        </header>
    )
}
