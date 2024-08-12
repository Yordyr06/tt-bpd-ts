import { Home } from "./Pages/Home";
import { Form } from "./Pages/Form"
import { Label } from "./Components/Label";

export const App = (): void => {
  const app = document.getElementById('app');
  const handleChange = (value: string) => {
    console.log(`This is the value: ${value}`)
  }

    app?.append(
      // Home(),
      // Form(),
      Label({
        number: 1,
        className: ['input'],
        action: handleChange
      })
    );
};

App()