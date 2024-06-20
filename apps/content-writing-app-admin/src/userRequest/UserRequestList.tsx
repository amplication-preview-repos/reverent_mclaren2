import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="contentLength" source="contentLength" />
        <TextField label="contentTone" source="contentTone" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="requestType" source="requestType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="youtubeLink" source="youtubeLink" />
      </Datagrid>
    </List>
  );
};
