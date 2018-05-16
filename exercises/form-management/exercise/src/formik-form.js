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
    const technologies = ["react", "formik", "graphQL", "reactNative"];
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
                        <p>Which of the following technologies have you used?</p>
                        {technologies.map(
                            item => <label><Field
                                type="checkbox"
                                id={item}
                                label={item}
                                name={item}
                            />
                            {item.replace(/^(.)/, $1 => $1.toUpperCase() )}
                        </label>
                        )}

                        <button className="submitButton" type="submit">
                            Submit Form
                        </button>
                    </Form>
                )}
            />
        </div>
        <Content submissions={this.state.submissions} />
      </div>
    );
  }
}
