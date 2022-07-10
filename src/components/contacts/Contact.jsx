import React from "react";
import { IconButton, ListItem } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Loading } from "notiflix";

import { useSelector } from "react-redux";
import {
  useDeleteContactByIdMutation,
  useGetContactsQuery,
} from "../../utils/api";

import { loadFromSessionStorage } from "../../utils/sessionStorage";
import Loader from "../Loader/Loader";

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(filter)
  );
};
export const Contact = () => {
  const currentUserId =
    useSelector((state) => state.loggedUser.id) ||
    loadFromSessionStorage("USER")[0];

  const { data, error, isLoading } = useGetContactsQuery(currentUserId);
  const [deleteContact] = useDeleteContactByIdMutation();

  const filter = useSelector((state) => state.filter);

  const onDelete = (id) => {
    deleteContact([currentUserId, id]);
    Loading.hourglass("Deleting contact...");
  };

  Loading.remove(1000);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <>
          {getVisibleContacts(data, filter).map(({ id, name, phone }) => (
            <ListItem
              sx={{
                justifyContent: "space-between",
                borderBottom: "3px solid",
              }}
              key={id}>
              {name} : {phone}
              <IconButton
                color="error"
                variant="outlined"
                type="button"
                onClick={() => onDelete(id)}>
                <DeleteForeverIcon />
              </IconButton>
            </ListItem>
          ))}
        </>
      ) : null}
    </>
  );
};
