import Image from "next/image";
// import styles from './Gallerie.module.css'

export default function Gallerie ({images}) {
    return <>
        <div >
            {images.map((image, index) => (
                <Image
                key={index}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}/>
            ))}
        </div>
    </>
}