import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts.ts";

export const action = async ({ params }) => {
  await deleteContact(params.contactId);
  return redirect("/");
};
