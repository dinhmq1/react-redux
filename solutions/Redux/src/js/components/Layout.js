import React from "react";
import { connect } from "react-redux";

// connect is going to run two functions
// the first is for getting store values in as props and it expects to return an object which gets returned as props
// and the second 
import { fetchUser } from "../actions/userActions"
@connect((store) => {
    return {
        user: store.user.user,
        userFetcher: store.user.fetched
    };
})
export default class Layout extends React.Component {
    // called immediately before mounting occurs and before Component#render
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }
    render() {
        console.log(this.props)
        return null;
    }
}