import React, {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import styled from "styled-components";
import {DatePicker, TimePicker} from "@mui/lab";
import {getWorkingHours, reportHours} from "./requests";

const Label =  styled.text`
  font-size: 18px;
  color: #666666;
  margin: 20px 0 30px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5px;
`

const Item = styled.div`
  width: auto;
  border-style: groove;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`

const HeaderWrapper = styled.div`
  margin-right: 35px;
`

const StartTime = styled.div`
  margin-right: 24px  ;
`

const EndTime = styled.div`
  margin-right: 4px
`

const Button = styled.button`
  width: auto;
  height: 30px;
  background: #7A5CFA;
  color: #FFFFFF;
  margin-top: 50px;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const Separator = styled.div`
  margin-bottom: 50px;
`

const Approved = styled.div`
  margin-left: 4px;
`

const ReportHours =({username}) =>  {
    const [date, setDate] = useState(new Date());
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [hours, setHours] = useState([]);
    const [hoursSoFar, setHoursSoFar] = useState(0)


    useEffect(() => {
        getWorkingHours(username, setHours);
    }, [])

    useEffect(() => {
        let num = "00:00";
        hours.forEach(hour => num = addTime(num, hour.totalTime))
        setHoursSoFar(num);
    }, [hours])

    const addTime = (time1, time2) => {
        const splitTime1 = time1.split(":");
        const splitTime2 = time2.split(":");
        const time1Hours = parseInt(splitTime1[0]);
        const time1Minutes = parseInt(splitTime1[1]);
        const time2Hours = parseInt(splitTime2[0]);
        const time2Minutes = parseInt(splitTime2[1]);
        if (time1Minutes + time2Minutes > 60){
            return `${('0' + (time1Hours + time2Hours + 1)).slice(-2)}:${('0'+ (time1Minutes + time2Minutes - 60)).slice(-2)}`
        }
        return `${('0' + (time1Hours + time2Hours)).slice(-2)}:${('0' + (time1Minutes + time2Minutes)).slice(-2)}`

    }

    const getTime = (time) => {
        const hours = ('0' + time.getHours()).slice(-2);
        const minutes = ('0' + time.getMinutes()).slice(-2);
        return `${hours}:${minutes}`;
    }

    const parseDate = (date) => {
        const dd = date.getDate();
        const mm = date.getMonth() + 1;
        const yy = date.getFullYear();
        return dd + '/' + mm + '/' + yy;
    }

    const onAddHour = (date, start, end) => {
        const startTime = getTime(start);
        const endTime = getTime(end);

        const newHours = [...hours, { date: parseDate(date), startTime: startTime, endTime: endTime, totalTime: getHoursDiff(startTime, endTime), approved: false }]
        setHours(newHours);
        reportHours(username, newHours);
    }

    const getHoursDiff = (startTime, endTime) => {
        const timeStart = new Date("01/01/2007 " + startTime).getTime();
        const timeEnd = new Date("01/01/2007 " + endTime).getTime();
        const totalMinutes = ((timeEnd - timeStart)/(1000 * 60));
        const totalHours = Math.floor(totalMinutes/60);
        const formatMinutes = ('0' + totalMinutes % 60).slice(-2);
        const formatHours = ('0' + totalHours).slice(-2);
        return `${formatHours}:${formatMinutes}`;
    }

    return (
        <div dir="rtl">
            <Container>
                <Label>השעות שלי:</Label>
                <HeaderWrapper>
                    <Row>
                        <div>תאריך</div>
                        <StartTime>שעת התחלה</StartTime>
                        <EndTime>שעת סיום</EndTime>
                        <div>שעות עבודה</div>
                        <Approved>אושר</Approved>
                    </Row>
                </HeaderWrapper>
                {hours.map(hour => <Item>
                    <div>{hour.date}</div>
                    <div>{hour.startTime}</div>
                    <div>{hour.endTime}</div>
                    <div>{getHoursDiff(hour.startTime, hour.endTime)}</div>
                    {hour.approved ? <div>כן</div> :  <div>לא</div>}
                </Item>)}
                <Separator/>
                <div>שעות שנצברו:</div>
                {hoursSoFar}
                <Separator/>
                <Row>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="בחר תאריך"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            dateAdapter={AdapterDateFns}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            ampm={false}
                            renderInput={(props) => <TextField {...props} />}
                            label="בחר שעת התחלה"
                            value={start}
                            onChange={(newValue) => {
                                setStart(newValue);
                            }}
                        />
                        <TimePicker
                            ampm={false}
                            renderInput={(props) => <TextField {...props} />}
                            label="בחר שעת סיום"
                            value={end}
                            onChange={(newValue) => {
                                setEnd(newValue);
                            }}
                            minTime={start}
                        />
                    </LocalizationProvider>
                </Row>
            </Container>
            <Center>
                <Button onClick={() => onAddHour(date,start,end)} disabled={start >= end}>הוסף שעות</Button>
            </Center>
        </div>
    );
}

export default ReportHours;