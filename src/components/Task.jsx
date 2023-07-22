import classNames from 'classnames';
import { useStore } from '../store';
import './task.css';
import trash from '../assets/trash-2.svg';

const STATUS = 'PLANNED';

function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const deleteTask = useStore((store) => store.deleteTask);

  return (
    <div
      className="task"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      {task.title}
      <div className="bottomWrapper">
        <div>
          <img src={trash} onClick={() => deleteTask(task.title)} />
        </div>
        <div className={classNames('status', task.state)}>{task.state}</div>
      </div>
    </div>
  );
}

export default Task;
