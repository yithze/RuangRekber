import { BsShieldLockFill, BsFillLightningFill } from "react-icons/bs";
import { PiHandshakeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "200+",
        icon: <BsShieldLockFill size={34} className="text-blue-500" />,
        description: "Transaksi aman telah diproses dengan sistem escrow terpercaya.",
    },
    {
        title: "4.9",
        icon: <BsFillLightningFill size={34} className="text-yellow-500" />,
        description: "Rating kepuasan pengguna, menunjukkan kepercayaan pelanggan terhadap layanan kami.",
    },
    {
        title: "70+",
        icon: <PiHandshakeFill size={34} className="text-green-600" />,
        description: "Pengguna aktif yang telah menggunakan Ruang Rekber untuk transaksi aman dan mudah.",
    }
];

