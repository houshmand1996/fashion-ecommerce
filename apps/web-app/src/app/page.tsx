import { Button } from '@code-dudes/fashion-ecommerce/ui-kit ';
export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="wrapper">
        <div className="container bg-secondary">
          <div id="welcome">
            <h1>
              <span className="text-primary-default"> Hello there, ali</span>
              Welcome web-app 👋
            </h1>
            <Button>button</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
