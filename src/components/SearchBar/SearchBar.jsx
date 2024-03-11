import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './SearchBar.module.css'

export const SearchBar = ({ onSearch }) => {
    const searchSchema = Yup.object().shape({
      search: Yup.string()
        .min(3, "")
        .required(() => {
          toast("Input your search request");
          return null;
        }),
    });
  
    return (
      <header className={css.header}>
        <Formik
          validationSchema={searchSchema}
          initialValues={{
            search: "",
          }}
          onSubmit={(values, actions) => {
            if (values.search.trim() === "") return;
            onSearch(values.search.trim());
            actions.resetForm();
          }}
        >
          <Form className={css.searchForm}>
            <Field
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Search..."
            />
            <button type="submit">Search</button>
            <ErrorMessage
              component="span"
              name="search"
            />
          </Form>
        </Formik>
        <Toaster id="123" position="top-right" />
      </header>
    );
  };
  