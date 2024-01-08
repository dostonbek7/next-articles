import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-400 fixed bottom-0 left-0 right-0">
      <div className="max-container">
        <p className="py-5 text-center">
          All Right Reserved.{new Date().getFullYear()} year
        </p>
      </div>
    </footer>
  );
}

export default Footer;
