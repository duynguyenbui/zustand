import { shallow } from 'zustand/shallow';
import { useStore } from './store';

export default function Temp({ state }) {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
}
