import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const SeoSettingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="keyword" source="keyword" />
        <TextInput label="metaDescription" source="metaDescription" />
        <SelectArrayInput
          label="tags"
          source="tags"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
