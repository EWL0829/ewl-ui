

## Button

Demo:

```tsx
import React from 'react';
import Button, { ButtonType } from './index';
import '../../styles/index.css'

export default () => {
  return (
    <div className='theme-default'>

      <Button onClick={() => { console.log('dark L'); }} btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Link} href="https://www.bilibili.com">Link</Button>
      <Button btnType={ButtonType.Text}>Text</Button>
      <Button btnType={ButtonType.Primary} disabled>disabled</Button>
      <Button btnType={ButtonType.Primary} ghost>ghost</Button>
    </div>
  );
};

```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
