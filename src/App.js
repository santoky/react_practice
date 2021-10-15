import React, { useState } from 'react';
import moment from 'moment';

const App = () => {
  // 커스텀 달력에 필요한 변수들
  const [ getMoment, setMoment ] = useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  // 1년은 52.xxx주인데, moment는 52주로 인식, 1년의 가장 마지막주를 53주차로 계산하는 코드
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  console.log(firstWeek, lastWeek);
  const calendarArr = () => {
    let result = [];
    let week = firstWeek;

    for(week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

              return(
                <td key={index}>
                  <span>{days.format('D')}</span>
                </td>
              )
            })
          }
        </tr>
      );
    }

    return result;
  }

  
  return (
    <div className="row_left">
      <div className="calendar__area">
        <div draggable="true" className="calendar__wrap ">
          <div className="calendar_head">
            <span className="title">{today.format('YYYY년 MM월')}</span>
            <div className="cal_btnarea">
              <button onClick={() => { setMoment(getMoment.clone().subtract(1, 'month'))}} className="btn btn__img--prev">&lt; 이전달</button>
              <button onClick={() => { setMoment(getMoment.clone().add(1, 'month'))}} className="btn btn__img--next">다음달 &gt;</button>
            </div>
          </div>
          <div className="calendar_body">
            <table>
              <tbody>
                {calendarArr()}
              </tbody>
            </table>
            <div className="cal_header">
              <span className="cal_cell">
                <span>월</span>
              </span>
              <span className="cal_cell">
                <span>화</span>
              </span>
              <span className="cal_cell">
                <span>수</span>
              </span>
              <span className="cal_cell">
                <span>목</span>
              </span>
              <span className="cal_cell">
                <span>금</span>
              </span>
              <span className="cal_cell">
                <span>토</span>
              </span>
              <span className="cal_cell">
                <span>일</span>
              </span>
            </div>
            <div role="rowgroup" className="calendar_rowgroup">
              <div className="calendar_row">
                <span className="cal_cell">
                  <div className="day">31</div>
                </span>
                <span className="cal_cell">
                  <div className="day">1</div>
                </span>
                <span className="cal_cell">
                  <div className="day">2</div>
                </span>
                <span className="cal_cell">
                  <div className="day">3</div>
                </span>
                <span className="cal_cell">
                  <div className="day">4</div>
                </span>
                <span className="cal_cell">
                  <div className="day">5</div>
                </span>
                <span className="cal_cell">
                  <div className="day">6</div>
                </span>
              </div>
              <div className="calendar_row">
                <span className="cal_cell today">
                  <div className="day">7</div>
                </span>
                <span className="cal_cell">
                  <div className="day ">8</div>
                </span>
                <span className="cal_cell">
                  <div className="day">9</div>
                </span>
                <span className="cal_cell">
                  <div className="day ">10</div>
                </span>
                <span className="cal_cell">
                  <div className="day ">11</div>
                </span>
                <span className="cal_cell">
                  <div className="day ">12</div>
                </span>
                <span className="cal_cell">
                  <div className="day ">13</div>
                </span>
              </div>
              <div className="calendar_row">
                <span className="cal_cell">
                  <div className="day">14</div>
                </span>
                <span className="cal_cell">
                  <div className="day">15</div>
                </span>
                <span className="cal_cell isdays">
                  <div className="day">16</div>
                </span>
                <span className="cal_cell">
                  <div className="day">17</div>
                </span>
                <span className="cal_cell">
                  <div className="day">18</div>
                </span>
                <span className="cal_cell">
                  <div className="day">19</div>
                </span>
                <span className="cal_cell">
                  <div className="day">20</div>
                </span>
              </div>
              <div className="calendar_row">
                <span className="cal_cell">
                  <div className="day stamp01">21</div>
                </span>
                <span className="cal_cell">
                  <div className="day">22</div>
                </span>
                <span className="cal_cell">
                  <div className="day stamp02">23</div>
                </span>
                <span className="cal_cell">
                  <div className="day">24</div>
                </span>
                <span className="cal_cell">
                  <div className="day stamp03">25</div>
                </span>
                <span className="cal_cell">
                  <div className="day">26</div>
                </span>
                <span className="cal_cell">
                  <div className="day">27</div>
                </span>
              </div>
              <div className="calendar_row">
                <span className="cal_cell">
                  <div className="day ">28</div>
                </span>
                <span className="cal_cell">
                  <div className="day ">29</div>
                </span>
                <span className="cal_cell">
                  <div className="day stamp04">30</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">1</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">2</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">3</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">4</div>
                </span>
              </div>
              <div className="calendar_row">
                <span className="cal_cell nextm">
                  <div className="day ">5</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">6</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">7</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">8</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">9</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">10</div>
                </span>
                <span className="cal_cell nextm">
                  <div className="day ">11</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table__container">
        <div className="table__box timetable">
          <div className="tr_header">
            <div className="tbl__row">
              <div className="tbl__col">총 수업일</div>
              <div className="tbl__col">출석</div>
              <div className="tbl__col">결석</div>
              <div className="tbl__col">지각</div>
              <div className="tbl__col">조퇴</div>
            </div>
          </div>
          <div className="tr_body">
            <div className="tbl__row">
              <div className="tbl__col">13</div>
              <div className="tbl__col">9</div>
              <div className="tbl__col">2</div>
              <div className="tbl__col">1</div>
              <div className="tbl__col">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;