import PlusIcon from "../assets/icons/plus.svg?react";
import Button from "../components/buttton";
import useTasks from "../hooks/use-tasks";
import TaskItem from "./task-item";


export default function TaskList() {
  const { task } = useTasks();
  
  return (
    <>
      <section>
        <Button className="w-full"  icon={PlusIcon}>Nova tarefa</Button>
      </section>

      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}