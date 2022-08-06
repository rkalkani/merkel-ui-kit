import tw from '../tailwind';
import { capitalize, map } from 'lodash';
import { Meta, Story } from '@storybook/react';
import { FC } from 'react';

export default {
  title: 'Foundations/Colors',
  component: () => <></>,
} as Meta;

const Color: FC<{
  name: string;
  color?: string;
  hex: string;
  rgba?: string;
}> = ({ name, color, hex, rgba }) => {
  return (
    <div className="">
      <div
        className={`mb-2 h-32 w-32 rounded-md ${'bg-' + name}`}
        style={{ backgroundColor: hex }}
      ></div>
      <p className="font-semibold">{name}</p>
      <p className="text-xs">{hex ?? color}</p>
      <p className="text-xs">{rgba}</p>
    </div>
  );
};

const Template: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { inherit, current, transparent, black, white, ...colors } = tw.colors;

  return (
    <div className="p-4">
      <h1 className="ml-0 py-4 text-4xl font-semibold">Primary Colors</h1>
      <div className="flex flex-wrap gap-4">
        <Color name="blue-600" hex={colors.blue[600]} />
        <Color name="blue-800" hex={colors.blue[800]} />
        <Color name="black" hex={black} />
      </div>

      <h1 className="ml-0 mt-4 py-4 text-4xl font-semibold">Colors</h1>
      {map(colors, (value, key) => {
        return (
          <div>
            <h2 className="ml-0 pt-2 text-xl font-semibold">
              {capitalize(key)}
            </h2>
            <div className="flex flex-wrap gap-4">
              {map(value, (v, k) => {
                return <Color name={`${key}-${k}`} hex={v} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Colors = Template.bind({});
