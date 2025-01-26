import type { IconDisplayPropsType } from '../display/icon-display.type';

export type IconType = 'monochrome' | 'graphic';

export type IconTabsPropType = Pick<
  IconDisplayPropsType,
  'fontSize' | 'color' | 'className'
>;
