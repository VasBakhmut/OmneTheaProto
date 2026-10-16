import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'OmneThea — Истина · Anar Mamedov', description: 'Первая книга проекта OmneThea. Практикум из 40 шагов. Прототип первой итерации.', robots: {index:false, follow:false} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ru"><body>{children}</body></html> }
