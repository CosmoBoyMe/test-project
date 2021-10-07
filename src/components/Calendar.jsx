import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setSelectedDate} from '../redux/Slice';
import { useSelector } from 'react-redux';

const Calendar = () => {
  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const dispatch  = useDispatch();
  const { selectedDate } = useSelector(({ calendar }) => calendar);
  const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const monthDays = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31],
  ];
  const date = new Date();
  const currentMonth = monthNames[date.getMonth()];

  const onSelectDay = ({ target }) => {
    if(target.classList.contains('calendar__day')) {
      dispatch(setSelectedDate(+target.textContent))
    }
  };

  return (
    <div className="calendar">
      <div className="calendar__main">
        <h4 className="calendar__month">{currentMonth}</h4>
        <div className="calendar__week-row">
          {weekDayNames.map((weekDayName, index) => (
            <div key={`weekDayName__${index}`} className="calendar__week-day">
              {weekDayName}
            </div>
          ))}
        </div>
        <div className="calendar__days" onClick={onSelectDay}>
          {monthDays.map((week, index) => (
            <div key={`week_${index}`} className="calendar__days-row">
              {week.map((day, i) => (
                <div
                  key={`day_${i}`}
                  className={classNames('calendar__day', {
                    'calendar__day--active': selectedDate === day,
                  })}>
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Link to='/event'>
        <button className="calendar__add-btn">Добавить</button>
      </Link>
    </div>
  );
};

export default Calendar;
