import './globals.css';

export const metadata = {
  title: 'KCE Checklist',
  description: 'Digital checklist for warehouse inspections',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
