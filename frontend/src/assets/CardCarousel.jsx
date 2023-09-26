/* eslint-disable react/prop-types */
export default function CardCarousel({ props }) {
    return (
        <div className="flex shadow-lg rounded-xl h-40 w-5/6 bg-white m-auto hover:cursor-grab active:cursor-grabbing" >
            <div className="w-2/5 flex flex-col items-center justify-center" >
                {props.img}
                <p className="text-2xl">{props.title}</p>
            </div>
            <div className="w-3/5 rounded-e-xl flex flex-col justify-center" style={{ background: props.color }}>
                {props.items.map((item, index) => (
                    <li className="text-white ps-4 text-[1rem]" key={index}>{item}</li>
                ))}
            </div>
        </div>
    )
}