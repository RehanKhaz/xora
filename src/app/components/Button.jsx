import clsx from "clsx"
import { Marker } from "./Marker"

const Button = ({ icon, href, children,fillMarker ,containerClass, onClick }) => {
    const Inner = () => {
       return  <>
        <div className={`relative flex py-2 w-max  px-3 gap-2 items-center justify-between`}>
            <span className="absolute left-[-1px]">
                <Marker fill={fillMarker}/>
            </span>
                <img src={icon} alt="" />
            <span className="uppercase text-[#2EF1FE] font-medium inner text-lg">{children}</span>
        </div>
            </>
    }
    return  href ? <a className={clsx(`relative, border ${containerClass} border-white p-0.5 bg-[#21316F] rounded-2xl shadow-lg `)} href={href}>
    <Inner/>
    </a>
        :
        <button onClick={onClick} className={clsx(`${containerClass} w-fit relative, p-0.5 bg-[#21316F] rounded-2xl shadow-lg `)} >
             <Inner/>
        </button>
}

export default Button