const fcTemplate = ({ componentName, props, jsx, exports }, { tpl }) => {
  const formattedName = `${componentName}: FC<SVGProps<SVGSVGElement>>`;
  return tpl`
  import type { FC,SVGProps } from 'react';

  const ${formattedName} = ${props} => {
    return ${jsx};
  }

  ${exports}
  `;
};

module.exports = fcTemplate;
