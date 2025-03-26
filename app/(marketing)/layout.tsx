import React from "react";
import Navar from "./_compoments/navar";
import Footer from "./_compoments/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 h-screen">
      <Navar />
      <main className="pt-14 pb-20">{children}</main>
      <Footer />
    </div>
  );
};
export default MarketingLayout;
