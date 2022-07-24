import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {retrieve, reset} from "../../actions/catalog/show";
import {del} from "../../actions/catalog/delete";
import Product from "../goods/Product";

class Show extends Component {
  static propTypes = {
    retrieved: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    eventSource: PropTypes.instanceOf(EventSource),
    retrieve: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    deleteError: PropTypes.string,
    deleteLoading: PropTypes.bool.isRequired,
    deleted: PropTypes.object,
    del: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.retrieve(decodeURIComponent(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  del = () => {
    if (window.confirm("Are you sure you want to delete this item?"))
      this.props.del(this.props.retrieved);
  };

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
        <div className="row gx-4 gx-lg-5 mb-5">
          <h3 className={'center'}>{this.props.retrieved.name}</h3>
        </div>

        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {this.props.retrieved && this.props.retrieved["goods"].map((item) => (
            <Product key={item.id} item={item}/>
          ))}
        </div>
      </>
    )
  }

  renderLinks = (type, items) => {
    if (Array.isArray(items)) {
      return items.map((item, i) => (
        <div key={i}>{this.renderLinks(type, item)}</div>
      ));
    }

    return (
      <Link to={`../../${type}/show/${encodeURIComponent(items)}`}>
        {items}
      </Link>
    );
  };
}

const mapStateToProps = (state) => ({
  retrieved: state.catalog.show.retrieved,
  error: state.catalog.show.error,
  loading: state.catalog.show.loading,
  eventSource: state.catalog.show.eventSource,
  deleteError: state.catalog.del.error,
  deleteLoading: state.catalog.del.loading,
  deleted: state.catalog.del.deleted,
});

const mapDispatchToProps = (dispatch) => ({
  retrieve: (id) => dispatch(retrieve(id)),
  del: (item) => dispatch(del(item)),
  reset: (eventSource) => dispatch(reset(eventSource)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
