export default function Footer() {
    return(
        <footer className="w-full h-80 bg-zinc-950 text-white flex flex-col items-center pt-8">
            <section className="w-[500px] h-[900px]">
                <div className="flex flex-col items-center pb-2">
                    <h1 className="font-semibold text-2xl font-mono">Foolish Developer</h1>
                </div>
                <div className="text-center pb-4">
                    <p className="text-xs  opacity-80 leading-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti accusamus sint voluptas est? Ratione magni delectus ut, laborum vero eveniet natus dignissimos quibusdam voluptatum minus nemo maxime harum sequi. Consectetur.</p>
                </div>
                <div className="flex items-center gap-4 justify-center">
                    <span className="cursor-pointer w-7 h-7 flex justify-center items-center rounded-full border border-white">
                        <box-icon  name='facebook-circle' type='logo' color='#fffbfb' ></box-icon>
                    </span>
                    <span className="cursor-pointer w-7 h-7 flex justify-center items-center rounded-full border border-white">
                        <box-icon  name='twitter' type='logo' color='#fffbfb' ></box-icon>
                    </span>
                    <span className="cursor-pointer w-7 h-7 flex justify-center items-center rounded-full border border-white">
                        <box-icon  name='linkedin-square' type='logo' color='#fffbfb' ></box-icon>
                    </span>
                    <span className="cursor-pointer w-7 h-7 flex justify-center items-center rounded-full border border-white">
                        <box-icon  name='gmail' type='logo' color='#fffbfb' ></box-icon>
                    </span>
                    <span className="cursor-pointer w-7 h-7 flex justify-center items-center rounded-full border border-white">
                        <box-icon  name='youtube' type='logo' color='#fffbfb' ></box-icon>
                    </span>
                </div>
            </section>
            <section className="bg-black w-full h-[580px] flex p-2 justify-between pt-4">
                <a className="flex gap-x-1 font-bold" href="#">Copyright &copy;2021 <p className="text-blue-500">Foolishdeveloper</p></a>
                <ul className="flex gap-x-2">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                    <li className="cursor-pointer">Blog</li>
                </ul>
            </section>
        </footer>
    )
}