import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contentLength" source="contentLength" />
        <TextField label="contentTone" source="contentTone" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="requestType" source="requestType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="youtubeLink" source="youtubeLink" />
      </SimpleShowLayout>
    </Show>
  );
};
