import { Parameters, StoryContext } from '@storybook/csf';
// import React, { type FC, type ReactNode } from 'react';
import './tailwind.css';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
} as Parameters;

// const ThemeWrapper: FC<{ context: StoryContext; children: ReactNode }> = (
//   props,
// ) => {
//   return <div className="story m-4 bg-blue-400">{props.children}</div>;
// };

// export const decorators = [
//   (renderStory: any, context: StoryContext) => (
//     <ThemeWrapper context={context}>{renderStory()}</ThemeWrapper>
//   ),
// ];
