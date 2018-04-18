import React from "react";
import { connect } from "react-redux";

// connect is going to run two functions
// the first is for getting store values in as props and it expects to return an object which gets returned as props
// and the second 
import { fetchUser } from "../actions/userActions"
import { fetchEntityForm } from "../actions/entityFormActions"

@connect((store) => {
    return {
        user: store.user.user,
        userFetcher: store.user.fetched,
        entityForms: store.entityForms.entityForms,
    };
})
export default class Layout extends React.Component {
    // called immediately before mounting occurs and before Component#render
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }
    fetchEntityForm() {
        this.props.dispatch(fetchEntityForm())
    }
    render() {
        const { user, entityForms } = this.props;
        if (!entityForms.length) {
            return <button onClick={this.fetchEntityForm.bind(this)}>load entity form</button>
        }
        const mappedEntityForms = entityForms.map(entityForm => <li key={entityForm.id}>{entityForm.text}</li>)
        return <div>
        <h1>{this.props.user.name}</h1>
        <ul>{mappedEntityForms}</ul>
        </div>;
    }
}