"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./components/redux/contactsOps.js";
import {
  selectError,
  selectLoading,
} from "./components/redux/contactsSlice.js";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p className="error">Error: {error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
