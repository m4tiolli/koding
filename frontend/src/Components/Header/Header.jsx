import Logo from "../Logo";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa"
import { LuPaintBucket } from "react-icons/lu";
import { BsFillMoonFill } from "react-icons/bs";
import { useDisclosure, Modal, ModalContent } from '@chakra-ui/react';
import { ImContrast } from 'react-icons/im';
import { ChakraProvider } from '@chakra-ui/react';

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isResponsive, setResponsive] = useState()

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        if (localStorage.theme === "dark") {
            setIsChecked(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsChecked(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth < 700);
        };

        handleResize(); // Set initial state

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ChakraProvider>
            <div className="flex justify-between items-center absolute top-0 w-11/12 pt-2">
                <Logo isDark={localStorage.theme === "dark"} />
                <div className="flex w-4/5 md:w-2/5 lg:w-2/6 xl:w-1/4 2xl:w-1/6 justify-between items-center h-8 md:h-12 ">
                    <Link to={"/login"} className="flex items-center justify-center bg-[#F1E0FF] h-full rounded-xl shadow-md text-cinza text-md md:text-xl hover:opacity-70 active:translate-y-1 active:shadow-xs font-semibold px-2">{!isResponsive ? <button>Entrar</button> : <FaUserAlt />}</Link>
                    <Link to={"/criar-conta"} className="flex items-center justify-center bg-[#F4BA84] w-fit h-full rounded-lg shadow-md text-cinza text-md md:text-xl hover:opacity-70 active:translate-y-1 active:shadow-xs px-2 md:px-4 font-semibold"><button>Criar Conta</button></Link>
                    <div
                        className={`w-10 h-10 flex items-center relative justify-center rounded-full hover:opacity-60  text-white bg-cinza dark:bg-white dark:text-darkcinza`}
                    >
                        <LuPaintBucket
                            onClick={onOpen}
                            className="text-2xl cursor-pointer relative"
                        />
                        <Modal
                            isOpen={isOpen}
                            onClose={onClose}
                            motionPreset="slideInBottom"
                            blockScrollOnMount={false}
                        >
                            <ModalContent
                                w="16vw"
                                position="fixed"
                                top="2rem"
                                right="1rem"
                                zIndex={100}
                                borderRadius="100"
                            >
                                <div className="bg-[#56505B] w-full py-3 flex justify-evenly items-center rounded-t-xl">
                                    <BsFillMoonFill className="text-[#e4d9ed] text-xl" />
                                    <p className="text-[#e4d9ed]">Modo escuro</p>
                                    <label className="flex cursor-pointer select-none items-center">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                                className="sr-only"
                                            />
                                            <div
                                                className={`box block h-6 w-10 rounded-full bg-[#e4d9ed]`}
                                            ></div>
                                            <div
                                                className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition bg-[#56505B] ${isChecked ? "translate-x-full" : ""
                                                    }`}
                                            ></div>
                                        </div>
                                    </label>
                                </div>
                                <div className="bg-[#e4d9ed] w-full py-3 flex justify-evenly items-center rounded-b-xl">
                                    <ImContrast className="text-[#56505B] text-xl" />
                                    <p className="text-[#56505B]">Alto contraste</p>
                                    <label className="flex cursor-pointer select-none items-center">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={!isChecked}
                                                onChange={handleCheckboxChange}
                                                className="sr-only"
                                            />
                                            <div
                                                className={`box block h-6 w-10 rounded-full bg-[#56505B]`}
                                            ></div>
                                            <div
                                                className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition bg-[#e4d9ed] ${!isChecked ? "translate-x-full" : ""
                                                    }`}
                                            ></div>
                                        </div>
                                    </label>
                                </div>
                            </ModalContent>
                        </Modal>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    )

}