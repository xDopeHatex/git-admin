import { Routing } from "../pages/Pages";
import { withProviders } from "./providers/withProviders";

const App = () => {
  return <Routing />;
};

export default withProviders(App);
