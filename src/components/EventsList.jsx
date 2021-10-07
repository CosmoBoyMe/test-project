import { useSelector } from 'react-redux';

const EventsList = () => {
  const { events, selectedDate } = useSelector(({ calendar }) => calendar);
  return (
    <div className="events">
      {!events[selectedDate]?.length ? (
        <p>У вас нету событий на этот день.</p>
      ) : (
        <ul className="events-list">
          {events[selectedDate].map(({ title, text, address, time, money }) => {
            return (
              <li className="events-list__item">
                <h5 className="events-list__title">{title}</h5>
                {address && <div className="events-list__address">Адрес: {address}</div>}
                {time && <div className="events-list__time">Время: {time}</div>}
                {text && <p className="events-list__text">{text}</p>}
                {money && <div>Бюджет: {money}$</div>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default EventsList;
