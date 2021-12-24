import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Product Name</label>
          <select name="inStock" id="idStock">
            <option value="gitar">Guitar</option>
            <option value="drum">Drum</option>
            <option value="keyboard">Keyboard </option>
            <option value="sexophone">Sexophone</option>
            <option value="Ampli">Ampli</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
