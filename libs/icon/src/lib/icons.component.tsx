import { HowToUseComponent, IconTabsComponent } from './components';
import '../../tailwind.base.css';
export type IconsProps = { color: string; fontSize: string; className: string };

export function IconsComponent({ color, fontSize, className }: IconsProps) {
  return (
    <>
      <HowToUseComponent />
      <IconTabsComponent
        color={color}
        fontSize={fontSize}
        className={className}
      />
    </>
  );
}
