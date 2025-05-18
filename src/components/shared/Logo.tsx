import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

function Logo({className}: {className: string}) {
    return (
        <Link href={'/'}>
        <div className={cn('relative', className)}>
            <Image
                alt='Logomarca Sandora'
                className='object-contain'
                fill
                quality={100}
                priority
                src={'assets/logo-sandora.svg'}
                aria-hidden
                />
        </div>
        <span className='sr-only'>Voltar para a página inicial</span>
        </Link>
    )
}

export default Logo