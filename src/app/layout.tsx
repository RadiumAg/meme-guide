import './globals.css';

export const metadata = {
  title: '梗指南',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className='dark:bg-slate-700'>{children}</body>
    </html>
  );
}
