import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Transaksi makin aman, cepat, dan bebas ribet bareng Ruang Rekber! 🔒🚀 Jaminan keamanan dengan sistem escrow terpercaya.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Process",
            url: "#process"
        }
    ],
    email: 'ruangrekber@gmail.com',
    telephone: '+627xxxxxxxx',
    socials: {
        x: 'https://twitter.com/x',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
        threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}
