/* eslint-disable react/prop-types */
export default function CardCarousel({ props }) {
    return (
        <div className="flex shadow-lg rounded-xl h-48 w-[29em] bg-white mx-10 hover:cursor-grab active:cursor-grabbing" >
            <div className="w-2/5 flex flex-col items-center justify-center" >
                {props.img}
                <p className="text-4xl">{props.title}</p>
            </div>
            <div className="w-3/5 rounded-e-xl flex flex-col justify-center" style={{ background: props.color }}>
                {props.items.map((item, index) => (
                    <li className="text-white ps-10 text-2xl" key={index}>{item}</li>
                ))}
            </div>
        </div>
    )
}