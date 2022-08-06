import { useMemo } from '@storybook/addons';

export type VariantClasses<T = string> = (variant: T) => string;

export const useVariantClasses = <T = string>(
  variantFn: VariantClasses<T>,
  variant: T,
): string => {
  return useMemo<string>(() => variantFn(variant), [variant, variantFn]);
};
