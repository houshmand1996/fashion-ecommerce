import { Button } from '@code-dudes/fashion-ecommerce/ui-kit ';
import { Cart } from '@code-dudes/fashion-ecommerce/web-app';
export default function Index() {
  return (
<div className="container bg-secondary">
      <div id="welcome" className="flex flex-col">
        <h1>
          <span className="text-primary-default"> Hello there, ali</span>
          Welcome web-app 👋
        </h1>
        <Button state={'primary'} size={'sm'} className="gap">
          button
        </Button>
        <Cart className="bg-slate-200" />
      </div>
    </div>
);
}
