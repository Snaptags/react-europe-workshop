import React, { Component } from "react";
import { Formik, Form, Field } from 'formik';

import "./formik-form.css";

export class Content extends Component {
    renderSubmissions = submissions => {
        return submissions.map(
            submission => <span style={{ fontWeight: "bold" }}>{submission.name}<br/></span>
        )
    }
    render() {
        const { submissions } = this.props;
        return <div className="contentWrapper">{this.renderSubmissions(submissions)}</div>;
    }
}

export default class FormikForm extends Component {
  constructor() {
    super();

    this.state = {
        submissions: []
    };
  }

  handleSubmit = submission => {
      this.setState({
          submissions: this.state.submissions.concat(submission)
      })
  };

  // we'd also have to have several onChange handlers and, of course, a more useful submit method!

  render() {
      console.log(this.state.submissions);
    return (
      <div className="pageWrapper">
        <div className="formWrapper">
            <Formik
                onSubmit={(values, actions) => {
                    this.handleSubmit(values);
                    actions.resetForm();
                }}
                initialValues={{
                 name: ""
                }}
                render={({ values, handleChange }) => (
                    <Form className="form">
                        <label htmlFor="name">What's your name?</label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            value={values.name}
                            required
                        />
                        <button className="submitButton" type="submit">
                            Submit Form
                        </button>
                    </Form>
                )}
            />
            {/*<form className="form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">What's your name?</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <p>Which of the following technologies have you used?</p>
              <div>
                <input type="checkbox" id="react" name="react" value="react" />
                <label htmlFor="react">React</label>
              </div>
              <div>
                <input type="checkbox" id="redux" name="redux" value="redux" />
                <label htmlFor="redux">Redux</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="formik"
                  name="formik"
                  value="formik"
                />
                <label htmlFor="formik">Formik</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="graphQL"
                  name="graphQL"
                  value="graphQL"
                />
                <label htmlFor="graphQL">GraphQL</label>
              </div>
              <div>
                <input type="checkbox" id="node" name="node" value="node" />
                <label htmlFor="node">Node</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reactNative"
                  name="reactNative"
                  value="reactNative"
                />
                <label htmlFor="reactNative">ReactNative</label>
              </div>
            </div>
            <button className="submitButton" type="submit">
              Submit Form
            </button>
          </form> */}
        </div>
        <Content submissions={this.state.submissions} />
      </div>
    );
  }
}
