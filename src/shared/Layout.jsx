const Header = () => {
  return (
    <div style={{ ...HeaderStyles }}>
      <span>{`Sparta Coding Club - Let's learn React`}</span>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
