import { CSSProperties } from "react";
import Image from "next/image";

interface BlurredImageProps {
    src: string;
    alt: string;
    style?: CSSProperties;
}
function BlurredImage({ src, alt, style }: BlurredImageProps) {
    return (
        <div>
            <Image
                style={{ ...style, zIndex: -1, filter: 'blur(70px)' }}
                src={src}
                alt={alt}
                layout='fill'
                objectFit="cover"
                placeholder="empty"
                blurDataURL={src}
            />
            <div style={{
                position: 'absolute', top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", zIndex: -1
            }}></div>
            
        </div>
    )
}
export default BlurredImage