function Footer() {
  const now = new Date();
  const year = now.getUTCFullYear();
  return <div className="footer">©{year} Jose Pérez</div>;
}
export default Footer;
