import { cx } from "class-variance-authority";
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
import useTask from "../hooks/use-task";
import { TaskState, type Task } from "../models/task";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({task}: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);
  const [taskTitle, setTaskTitle] = React.useState(task?.title || "");
  const {updateTask, updateTaskStatus, deleteTask} = useTask();

  //-------------------------------------------------'
  function handleEditingTask() {
    setIsEditing(true);
  }

  function handleExitEditingTask() {
    if(task.state === TaskState.Creating){
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }
  
  function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateTask(task.id, {title: taskTitle});
    setIsEditing(false);
  }

  function hanldeChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>){
    updateTaskStatus(task.id, event.target.checked);
  }

  function handleDeleteTask() { 
    deleteTask(task.id);
  }

  //-------------------------------------------------'
  return (
    <Card size="md">
      {!isEditing ?
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={hanldeChangeTaskStatus}
          />
          
          <Text className={cx("flex-1", { "line-through": task?.concluded })}>
            {task?.title}
          </Text>

          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" onClick={handleDeleteTask}/>
            <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditingTask}/>
          </div>
        </div>
        : 
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle} required autoFocus/>
          <div className="flex gap-1">
            <ButtonIcon type="button" icon={XIcon} variant="secondary" onClick={handleExitEditingTask}/>
            <ButtonIcon type="submit" icon={Checkcon} variant="primary"/>
          </div>
        </form>
      }
    </Card>
  );
}