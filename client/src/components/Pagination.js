import React from 'react';
import {Link} from "react-router-dom";
import {getQueryParam} from "../utils/url";

function Pagination({retrieved}) {

  const view = retrieved && retrieved["hydra:view"];
  if (!view || !view["hydra:first"]) return;

  const {
    "hydra:first": first,
    "hydra:previous": previous,
    "hydra:next": next,
    "hydra:last": last,
  } = view;

  function fixUrl(url) {
    const page = getQueryParam(url, 'page')
    return `?page=${page}`
  }

  return (
    <div aria-label="Page navigation">
      <Link
        to="."
        className={`btn btn-primary${previous ? "" : " disabled"}`}
      >
        <span aria-hidden="true">&lArr;</span> First
      </Link>
      <Link
        to={
          !previous || previous === first ? "#" : fixUrl(previous)
        }
        className={`btn btn-primary${previous ? "" : " disabled"}`}
      >
        <span aria-hidden="true">&larr;</span> Previous
      </Link>
      <Link
        to={next ? fixUrl(next) : "#"}
        className={`btn btn-primary${next ? "" : " disabled"}`}
      >
        Next <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link
        to={last ? fixUrl(last) : "#"}
        className={`btn btn-primary${next ? "" : " disabled"}`}
      >
        Last <span aria-hidden="true">&rArr;</span>
      </Link>
    </div>
  );
}

export default Pagination;
