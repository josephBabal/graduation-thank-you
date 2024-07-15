export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-1">
      {/* <GradientBackground> */}
      {children}
      {/* </GradientBackground> */}
    </div>
  );
}
  