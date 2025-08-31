import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import ButtonIcon from "./components/button-icon";
import Button from "./components/buttton";
import Card from "./components/card";
import Container from "./components/container";
import InputCheckbox from "./components/input-checkbox";
import InputText from "./components/input-text";

function App() {
  return (
    <Container className="flex flex-col gap-8 pt-20">
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

       <div>
        <Card size="md">Olá mundo</Card>
      </div>
    </Container>
  );
}

export default App;
