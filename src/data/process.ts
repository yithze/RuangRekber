import { IProcess } from "@/types";

export const tiers: IProcess[] = [
    {
        name: 'Kirim Dana',
        price: '',
        features: [
            'Pembeli mengirim dana ke Ruang Rekber.',
            'Dana ditahan sementara untuk keamanan.',
            'Konfirmasi pembayaran sebelum diproses.',
        ],
    },
    {
        name: 'Proses Transaksi',
        price: '',
        features: [
            'Penjual memberikan produk sesuai kesepakatan.',
            'Pembeli dapat meminta bukti sebelum konfirmasi.',
            'Admin siap membantu jika ada kendala.',
        ],
    },
    {
        name: 'Dana Dicairkan',
        price: '',
        features: [
            'Pembeli konfirmasi bahwa transaksi selesai.',
            'Dana langsung dicairkan ke penjual.',
            'Admin menjadi mediator jika ada sengketa.',
        ],
    },
];
