export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-2">
      {/* <GradientBackground> */}
      {children}
      {/* </GradientBackground> */}
    </div>
  );
}
  