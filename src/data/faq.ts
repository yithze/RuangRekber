import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Apakah ${siteDetails.siteName} aman?`,
        answer: 'Tentu! Ruang Rekber menahan dana sementara hingga transaksi selesai, memastikan keamanan bagi pembeli dan penjual. Semua transaksi juga didokumentasikan dengan baik untuk transparansi.',
    },
    {
        question: `Bagaimana cara kerja ${siteDetails.siteName}?`,
        answer: 'Pembeli mengirim dana ke Ruang Rekber, lalu penjual mengirim barang atau jasa sesuai kesepakatan. Setelah pembeli mengonfirmasi penerimaan barang, dana dicairkan ke penjual.',
    },
    {
        question: `Berapa lama proses transaksi di ${siteDetails.siteName}?`,
        answer: 'Proses transaksi dilakukan secepat mungkin setelah konfirmasi pembayaran dan pengiriman bukti. Admin siap membantu agar transaksi berjalan lancar.',
    },
    {
        question: 'Apakah menggunakan Ruang Rekber bisa mencegah penipuan?',
        answer: 'Ya! Dengan sistem escrow, dana hanya dicairkan setelah barang atau jasa diterima sesuai kesepakatan. Ini meminimalkan risiko penipuan dan memastikan transaksi lebih aman.',
    },
    {
        question: 'Bagaimana jika terjadi sengketa dalam transaksi?',
        answer: 'Jika ada masalah, admin Ruang Rekber akan bertindak sebagai mediator untuk mencari solusi terbaik bagi kedua belah pihak. Semua transaksi terdokumentasi untuk transparansi.',
    },
    {
        question: 'Berapa biaya transaksi di Ruang Rekber?',
        answer: 'Biaya transaksi adalah 1% dari total nominal transaksi. Namun, jika 1% dari transaksi kurang dari Rp5.000, maka biaya yang dikenakan adalah Rp5.000. Contoh: jika transaksi Rp200.000, biaya 1% adalah Rp2.000, sehingga yang dikenakan tetap Rp5.000. Jika transaksi Rp1.000.000, biaya 1% adalah Rp10.000, sehingga yang dikenakan Rp10.000.',
    }
];

