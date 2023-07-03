import compose from "compose-function";
import { withRouter } from "./with-router";
import { withLingui } from "./with-lingui";
import { withRedux } from "./with-redux";

export const withProviders = compose(withLingui, withRedux, withRouter);
