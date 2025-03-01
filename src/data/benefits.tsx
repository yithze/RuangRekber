import { FiShield, FiClock, FiCheckCircle } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Keamanan & Biaya Transparan",
        description: "Ruang Rekber memastikan transaksi yang aman. Selain itu, biaya transaksi jelas dan transparan.",
        bullets: [
            {
                title: "Dana Ditahan Sementara",
                description: "Dana hanya dicairkan setelah transaksi selesai untuk menjamin keamanan.",
                icon: <FiShield size={26} />
            },
            {
                title: "Keamanan Terjamin",
                description: "Menjamin keamanan bagi pembeli dan penjual dalam setiap transaksi.",
                icon: <FiShield size={26} />
            },
            {
                title: "Transaksi yang Adil",
                description: "Rekber sebagai perantara untuk memastikan kesepakatan berjalan dengan baik.",
                icon: <FiShield size={26} />
            },
            {
                title: "Biaya Transaksi Jelas",
                description: "Biaya transaksi adalah 1% dari total nominal transaksi. Jika 1% dari transaksi kurang dari Rp5.000, maka biaya yang dikenakan adalah Rp5.000.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/images/Verified.png"
    },
    {
        title: "Proses Cepat",
        description: "Setiap transaksi diproses dengan cepat dan efisien agar kedua belah pihak tidak perlu menunggu lama.",
        bullets: [
            {
                title: "Admin Standby",
                description: "Admin selalu siap membantu agar transaksi berjalan lancar.",
                icon: <FiClock size={26} />
            },
            {
                title: "Konfirmasi Mudah",
                description: "Cukup lakukan konfirmasi pembayaran dan kirim bukti, transaksi segera diproses.",
                icon: <FiClock size={26} />
            },
            {
                title: "Tanpa Menunggu Lama",
                description: "Transaksi diprioritaskan untuk diproses secepat mungkin.",
                icon: <FiClock size={26} />
            }
        ],
        imageSrc: "/images/Fast.png"
    },
    {
        title: "Anti Penipuan",
        description: "Dengan sistem rekber, risiko penipuan dapat diminimalkan sehingga transaksi lebih aman dan terpercaya.",
        bullets: [
            {
                title: "Dana Dicairkan Setelah Konfirmasi",
                description: "Dana hanya akan dicairkan setelah pembeli memastikan barang atau jasa telah diterima.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Transparansi Transaksi",
                description: "Setiap transaksi terdokumentasi dengan baik untuk transparansi dan keamanan.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Admin Sebagai Mediator",
                description: "Admin Ruang Rekber berperan sebagai penengah untuk mencegah potensi penipuan.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/images/Warning.png"
    }
];

