
import { default as CheckIcon, default as PencilIcon } from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import Badge from "../components/badge";
import ButtonIcon from "../components/button-icon";
import Button from "../components/buttton";
import Card from "../components/card";
import Container from "../components/container";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";


export default function PagesComponents() {
  return (
    <Container className="flex flex-col gap-8 pt-20">
      <Button icon={SpinnerIcon} >Salvar</Button>

      <div className="flex gap-1">
        <ButtonIcon icon={CheckIcon} />
        <ButtonIcon icon={PencilIcon} variant={"secondary"}/>
        <ButtonIcon icon={PlusIcon}  variant={"tertiary"}/>
        <ButtonIcon icon={SpinnerIcon} />
        <ButtonIcon icon={SpinnerIcon} loading/>
      </div>

      <div className="flex gap-2">
        <Badge loading >1</Badge>
        <Badge >2 de 5</Badge>
        <Badge loading >3</Badge>
      </div>
      
      <div>
        <InputText />
      </div>

      <div className="flex gap-2">
        <InputCheckbox />
        <InputCheckbox loading/>
      </div>

       <div>
        <Card size="md">Olá mundo</Card>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6" />
        <Skeleton className="h-6"/>
        <Skeleton className="w-36 h-6" />
      </div>
    </Container>
  );
}