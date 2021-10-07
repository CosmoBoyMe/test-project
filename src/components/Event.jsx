import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addNewEvent } from '../redux/Slice.js';

const Event = () => {
  const [eventType, setEventType] = useState('activity');
  const history = useHistory();
  const { selectedDate } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const onCancelEvent = () => {
    history.push('/');
  };

  const formData = {};

  const onChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    formData[name] = value;
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    dispatch(addNewEvent({date: selectedDate, formData}));
    history.push('/');
  };

  return (
    <div className="event">
      <h3>Добавить событие</h3>
      <form onSubmit={onSubmitEvent} className="event__form">
        <label htmlFor="event_name" className="event__label">
          Название события
        </label>
        <input
          name="title"
          onChange={onChangeInput}
          id="event_name"
          type="text"
          className="event__text"
        />
        <label htmlFor="" className="event__label">
          Тип события
        </label>
        <select
          onChange={({ target }) => setEventType(target.value)}
          name=""
          id=""
          defaultValue="activity"
          className="event__select">
          <option value="holidays">Праздничные дни</option>
          <option value="activity">Мероприятия</option>
          <option value="other">Пометки / Другое</option>
        </select>
        {eventType === 'holidays' && (
          <>
            <label htmlFor="event_name" className="event__label">
              Бюджет
            </label>
            <input onChange={onChangeInput} name="money" type="number" />
          </>
        )}
        {eventType === 'activity' && (
          <>
            <label htmlFor="" className="event__label">
              Куда идем?
            </label>
            <input onChange={onChangeInput} name="address" type="text" />
            <label htmlFor="" className="event__label">
              Во сколько?
            </label>
            <input onChange={onChangeInput} name="time" type="time" />
          </>
        )}
        {eventType === 'other' && (
          <>
            <label htmlFor="" className="event__label">
              Пометки/Другое
            </label>
            <input onChange={onChangeInput} name="text" type="text" />
          </>
        )}
        <div className="event__buttons">
          <button onClick={onCancelEvent}>Отмена</button>
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  );
};

export default Event;
