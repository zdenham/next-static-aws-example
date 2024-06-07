export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <div style={containerStyle}>
          <div style={heroStyle}>{children}</div>
        </div>
      </body>
    </html>
  );
}

const bodyStyle = {
  fontFamily: 'monospace',
  overflow: 'hidden',
  margin: 0,
  padding: 0,
};

const containerStyle = {
  width: '100vw',
  height: '90vh',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  lineHeight: 1.6,
};

const heroStyle = { width: 500, maxWidth: '90vw' };
