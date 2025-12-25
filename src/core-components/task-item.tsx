import React from "react";
import Checkcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Text from "../components/text";

export default function TaskItem() {
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditingTask() {
    setIsEditing(true);
  }

  function handleExitEditingTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ?
        <>
          <InputCheckbox />
          <Text className="flex-1">🛍️ Fazer compras da semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary"/>
            <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditingTask}/>
          </div>
        </>
        : 
        <>
          <InputText className="flex-1"/>
          <div className="flex gap-1">
            <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitEditingTask}/>
            <ButtonIcon icon={Checkcon} variant="primary"/>
          </div>
        </>
      }
    </Card>
  );
}