import Container from "../components/container";
import TaskList from "../core-components/tasks-list";
import TasksSummary from "../core-components/tasks-sumamary";



export default function PageHome() {
  return(
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>
      
      <TaskList />
    </Container>
  );
}