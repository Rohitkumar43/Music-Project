

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  /*React Node is a type where it has too many things like string , fragemnt etc which accept it in the form of typescript*/
}>) {
  return (
    <>
    <h2>Inner layout Items </h2>
    {children}
    </>

  );
}


