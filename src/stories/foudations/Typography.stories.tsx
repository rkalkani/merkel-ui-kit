import tw from '../tailwind';
import { map } from 'lodash';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Foundations/Typography',
  component: () => <></>,
} as Meta;

const TypefaceTemplate: Story = () => {
  return (
    <div className="p-4">
      <h1 className="ml-0 py-4 text-4xl font-semibold">Typeface</h1>
      <div className="space-y-8">
        <p>Compass uses two fonts.</p>
        <p>
          <code className="inline p-2 text-blue-600">Inter</code> : for all the
          texts and{' '}
        </p>
        <p>
          <code className="inline  p-2 text-blue-600">IBM Plex Mono</code> : for
          the hashes
        </p>
      </div>

      <h2 className="ml-0 py-4 text-xl font-semibold">Inter</h2>
      <p className="font-thin">Inter thin</p>
      <p className="font-extralight">Inter extralight</p>
      <p className="font-light">Inter light</p>
      <p className="font-normal">Inter normal</p>
      <p className="font-medium">Inter medium</p>
      <p className="font-semibold">Inter semibold</p>
      <p className="font-bold">Inter bold</p>
      <p className="font-extrabold">Inter extrabold</p>

      <h2 className="ml-0 py-4 text-xl font-semibold">IBM Plex Mono</h2>
      <p className="font-ibmplex font-thin">IBM Mono thin</p>
      <p className="font-ibmplex font-extralight">IBM Mono extralight</p>
      <p className="font-ibmplex font-light">IBM Mono light</p>
      <p className="font-ibmplex font-normal">IBM Mono normal</p>
      <p className="font-ibmplex font-medium">IBM Mono medium</p>
      <p className="font-ibmplex font-semibold">IBM Mono semibold</p>
      <p className="font-ibmplex font-bold">IBM Mono bold</p>
      <p className="font-ibmplex font-extrabold">IBM Mono extrabold</p>
    </div>
  );
};

const ScalingTemplate: Story = () => {
  return (
    <div className="p-4">
      <h1 className="ml-0 py-4 text-xl font-semibold">Scaling</h1>

      <h2 className="ml-0 pt-4 text-xl font-semibold">Inter</h2>
      {map(tw.fontSize, (value, key) => {
        return (
          <div className={`pt-4`}>
            <div>
              <p
                className={`font-semibold ${'text-' + key}`}
              >{`text-${key}`}</p>
            </div>
            <div>
              <p className={`font-inter font-normal ${'text-' + key}`}>
                The quick brown fox jumped over the lazy dogs
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Typeface = TypefaceTemplate.bind({});
export const Scaling = ScalingTemplate.bind({});
