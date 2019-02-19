import { configure, getStorybook, setAddon } from "@storybook/react";

import createPercyAddon from "@percy-io/percy-storybook";

const { percyAddon, serializeStories } = createPercyAddon();

setAddon(percyAddon);

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
serializeStories(getStorybook);
