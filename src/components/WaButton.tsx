import React from 'react'
import clsx from 'clsx'

import { whatsappUrl } from '@/data/wa'

const WaButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={whatsappUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <div className="mr-3">
                </div>
                <div>
                    <div className="text-xs">
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        WhatsApp
                    </div>
                </div>
            </button>
        </a>
    )
}

export default WaButton
