import { type FC } from "react";
import { Form } from "react-router-dom";
import { type contact } from "./routes/Contact.tsx";

interface Props {
  contact: typeof contact;
}

export const Favorite: FC<Props> = (props) => {
  const { contact } = props;
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "⭐️" : "⭐︎"}
      </button>
    </Form>
  );
};
