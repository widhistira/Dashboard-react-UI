import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
    
            <span className="widgetLgName">Vela</span>
          </td>
          <td className="widgetLgDate">2 Desember 2021</td>
          <td className="widgetLgAmount">Rp. 750.000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">

            <span className="widgetLgName">Eka</span>
          </td>
          <td className="widgetLgDate">8 Desember 2021</td>
          <td className="widgetLgAmount">Rp. 5050.000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          
            <span className="widgetLgName">Aga</span>
          </td>
          <td className="widgetLgDate">4 Desember 2021</td>
          <td className="widgetLgAmount">Rp. 1.200.000</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
   
            <span className="widgetLgName">Rangga</span>
          </td>
          <td className="widgetLgDate">10 Desember 2021</td>
          <td className="widgetLgAmount">Rp. 2.600.000</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
     
            <span className="widgetLgName">Devanus</span>
          </td>
          <td className="widgetLgDate">15 Desember 2021</td>
          <td className="widgetLgAmount">Rp. 2.000.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
