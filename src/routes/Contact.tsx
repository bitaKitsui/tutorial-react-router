import { type FC } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { Favorite } from "../Favorite.tsx";
import { getContact } from "../contacts.ts";

export const loader = async ({ params }) => {
  const contact = await getContact(params.contactId);
  return { contact };
};

export const Contact: FC = () => {
  const { contact } = useLoaderData();
  return (
    <div id="contact">
      <div>
        <img src={contact.avatar ?? null} alt="" key={contact.avatar} />
      </div>

      <div>
        <h1>
          {(contact.first ?? contact.last) !== "" ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter !== "" && (
          <p>
            <a
              href={`https://twitter.com/${contact.twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes !== "" && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};
