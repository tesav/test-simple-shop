import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {list, reset} from "../../actions/goods/list";
import __ from "../../utils/i18n";
import Product from "./Product";
import Pagination from "../Pagination";
import {getQueryParam} from "../../utils/url";

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
    this.load()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search)
      this.load()
  }

  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  load = () => {
    const query = [
      'hidden=false',
      'quantity[gt]=0',
    ]

    if (this.props.location.search) {
      const page = getQueryParam(this.props.location.search, 'page')
      if (page) {
        query.push(`page=${page}`)
      }
    }

    if (this.props.match.params.id) {
      query.push(`catalog.id=${this.props.match.params.id}`)
    }

    this.props.list(
      `goods${query ? `?${query.join('&')}` : ''}`
    );
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

        <Pagination retrieved={this.props.retrieved}/>
      </>
    )
  }
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
