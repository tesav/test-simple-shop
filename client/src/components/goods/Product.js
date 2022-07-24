import React from 'react';
import {Link} from "react-router-dom";
import __ from "../../utils/i18n";

function Product({item}) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>

        {item.catalog?.name && item.catalog.id &&
        <div className="card-body p-4">
          <div className="text-center">
            <Link to={`/category/${item.catalog.id}`}>
              <h5 className="fw-bolder">{item.catalog.name}</h5>
            </Link>
          </div>
        </div>}

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item["name"]}</h5>
            ${item["regprice"]} / {item.measure?.name || '?'}
            <br/>
            {__('В наличии')}: {item["quantity"]} {item.measure?.name || '?'}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">View options</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
