import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Pendapatan</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp. 50.000.000</span>
          <span className="featuredMoneyRate">
            +10.4% <ArrowUpward className="featuredIcon positive"/>
          </span>
        </div>
        <span className="featuredSub">Perbandingan dengan bulan lalu</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Penjualan Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp. 35.000.000</span>
          <span className="featuredMoneyRate">
            -5% <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Perbandingan dengan bulan lalu</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Pembelian</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp. 100.000.000</span>
          <span className="featuredMoneyRate">
            +2.4% <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Perbandingan dengan bulan lalu</span>
      </div>
    </div>
  );
}
