export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap row-between">
        <span className="row label-sm"><img src="/media/img/logo-light-96.webp" alt="Islam Wael logo" width="44" height="44" />© {new Date().getFullYear()} ISLAM WAEL</span>
        <a href="/links/" className="ar">إسلام وائل · القاهرة · لينكات</a>
      </div>
    </footer>
  );
}
