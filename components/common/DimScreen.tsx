import { useDimScreen } from "../../lib/hooks/useDimScreen";
import { useTasks } from "../../lib/hooks/useTasks";

export default function DimScreen() {
  const dimScreenStore = useDimScreen((state) => state);
  const tasksStore = useTasks((state) => state);

  return dimScreenStore.isDimScreenVisible ? (
    <div
      onClick={() => {
        dimScreenStore.disableDimScreen();
        tasksStore.stopEditingTask();
      }}
      className="absolute top-0 left-0 h-screen w-screen"
    />
  ) : null;
}
