import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import ButtonIcon from "./components/button-icon";
import Button from "./components/buttton";
import InputCheckbox from "./components/input-checkbox";
import InputText from "./components/input-text";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-100">
      <Button icon={SpinnerIcon} >Salvar</Button>

      <div className="flex gap-1">
        <ButtonIcon icon={CheckIcon} />
        <ButtonIcon icon={PencilIcon} variant={"secondary"}/>
        <ButtonIcon icon={PlusIcon}  variant={"tertiary"}/>
        <ButtonIcon icon={SpinnerIcon} />
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckbox />
      </div>
    </div>
  );
}

export default App;
