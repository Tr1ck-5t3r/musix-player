import Image from "next/image";

export const Loading = () => {
    return (
        <main className="flex w-full h-full items-center justify-center bg-white">
            <Image src={"/logo.svg"} alt="Logo" width={200} height={200} />
        </main>
    );
}
    