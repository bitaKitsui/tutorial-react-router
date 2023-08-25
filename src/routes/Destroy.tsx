import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts.ts";

export const action = async ({ params }) => {
  throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
};
