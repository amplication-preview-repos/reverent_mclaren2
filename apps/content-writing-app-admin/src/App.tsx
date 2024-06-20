import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserRequestList } from "./userRequest/UserRequestList";
import { UserRequestCreate } from "./userRequest/UserRequestCreate";
import { UserRequestEdit } from "./userRequest/UserRequestEdit";
import { UserRequestShow } from "./userRequest/UserRequestShow";
import { GeneratedContentList } from "./generatedContent/GeneratedContentList";
import { GeneratedContentCreate } from "./generatedContent/GeneratedContentCreate";
import { GeneratedContentEdit } from "./generatedContent/GeneratedContentEdit";
import { GeneratedContentShow } from "./generatedContent/GeneratedContentShow";
import { SeoSettingsList } from "./seoSettings/SeoSettingsList";
import { SeoSettingsCreate } from "./seoSettings/SeoSettingsCreate";
import { SeoSettingsEdit } from "./seoSettings/SeoSettingsEdit";
import { SeoSettingsShow } from "./seoSettings/SeoSettingsShow";
import { ContentTaskList } from "./contentTask/ContentTaskList";
import { ContentTaskCreate } from "./contentTask/ContentTaskCreate";
import { ContentTaskEdit } from "./contentTask/ContentTaskEdit";
import { ContentTaskShow } from "./contentTask/ContentTaskShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ContentWritingApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserRequest"
          list={UserRequestList}
          edit={UserRequestEdit}
          create={UserRequestCreate}
          show={UserRequestShow}
        />
        <Resource
          name="GeneratedContent"
          list={GeneratedContentList}
          edit={GeneratedContentEdit}
          create={GeneratedContentCreate}
          show={GeneratedContentShow}
        />
        <Resource
          name="SeoSettings"
          list={SeoSettingsList}
          edit={SeoSettingsEdit}
          create={SeoSettingsCreate}
          show={SeoSettingsShow}
        />
        <Resource
          name="ContentTask"
          list={ContentTaskList}
          edit={ContentTaskEdit}
          create={ContentTaskCreate}
          show={ContentTaskShow}
        />
      </Admin>
    </div>
  );
};

export default App;
