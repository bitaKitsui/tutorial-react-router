import { type FC } from "react";
import { Form, useFetcher } from "react-router-dom";
import { type contact } from "./routes/Contact.tsx";

interface Props {
  contact: typeof contact;
}

export const Favorite: FC<Props> = (props) => {
  const fetcher = useFetcher();
  const { contact } = props;
  const favorite = contact.favorite;
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "⭐️" : "⭐︎"}
      </button>
    </fetcher.Form>
  );
};
