import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number must be at most 50 characters')
      .required('Number is required'),
  });

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" id={nameId} name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" id={numberId} name="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
