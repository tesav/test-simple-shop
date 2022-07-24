import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {list, reset} from "../../actions/goods/list";
import __ from "../../utils/i18n";
import Product from "./Product";

class List extends Component {
  static propTypes = {
    retrieved: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    eventSource: PropTypes.instanceOf(EventSource),
    deletedItem: PropTypes.object,
    list: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.list(
      this.props.match.params.page &&
      decodeURIComponent(this.props.match.params.page)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.page !== prevProps.match.params.page)
      this.props.list(
        this.props.match.params.page &&
        decodeURIComponent(this.props.match.params.page)
      );
  }

  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  render() {

    if (this.props.loading) {
      return (
        <div className="alert alert-info">Loading...</div>
      )
    }

    if (this.props.error) {
      return (
        <div className="alert alert-danger">{this.props.error}</div>
      )
    }

    if (!this.props.retrieved) {
      return <h3>No data found.</h3>
    }

    return (
      <>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {this.props.retrieved["hydra:member"].map((item) => (
            <Product key={item.id} item={item}/>
          ))}
        </div>

        {this.pagination()}
      </>
    )
  }

  pagination() {
    const view = this.props.retrieved && this.props.retrieved["hydra:view"];
    if (!view || !view["hydra:first"]) return;

    const {
      "hydra:first": first,
      "hydra:previous": previous,
      "hydra:next": next,
      "hydra:last": last,
    } = view;

    return (
      <nav aria-label="Page navigation">
        <Link
          to="."
          className={`btn btn-primary${previous ? "" : " disabled"}`}
        >
          <span aria-hidden="true">&lArr;</span> First
        </Link>
        <Link
          to={
            !previous || previous === first ? "." : encodeURIComponent(previous)
          }
          className={`btn btn-primary${previous ? "" : " disabled"}`}
        >
          <span aria-hidden="true">&larr;</span> Previous
        </Link>
        <Link
          to={next ? encodeURIComponent(next) : "#"}
          className={`btn btn-primary${next ? "" : " disabled"}`}
        >
          Next <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link
          to={last ? encodeURIComponent(last) : "#"}
          className={`btn btn-primary${next ? "" : " disabled"}`}
        >
          Last <span aria-hidden="true">&rArr;</span>
        </Link>
      </nav>
    );
  }

  renderLinks = (type, items) => {
    if (Array.isArray(items)) {
      return items.map((item, i) => (
        <div key={i}>{this.renderLinks(type, item)}</div>
      ));
    }

    return (
      <Link to={`../${type}/show/${encodeURIComponent(items)}`}>{items}</Link>
    );
  };
}

const mapStateToProps = (state) => {
  const {retrieved, loading, error, eventSource, deletedItem} =
    state.goods.list;
  return {retrieved, loading, error, eventSource, deletedItem};
};

const mapDispatchToProps = (dispatch) => ({
  list: (page) => dispatch(list(page)),
  reset: (eventSource) => dispatch(reset(eventSource)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
