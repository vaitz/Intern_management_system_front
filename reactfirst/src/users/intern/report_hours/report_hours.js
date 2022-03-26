import {useEffect, useMemo, useState} from "react";
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
  margin-right: 50px  ;
`

const EndTime = styled.div`
  margin-right: 20px
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

const ReportHours =({username}) =>  {
    const [date, setDate] = useState(new Date());
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [hours, setHours] = useState([]);
    const [hoursSoFar, setHoursSoFar] = useState(0)


    useEffect(() => {
        getWorkingHours(username, setHours);
    }, [])

    console.log(hours)

    useEffect(() => {
        let num = 0;
        hours.forEach(hour => num = num + getHoursDiff(hour.startTime, hour.endTime))
        setHoursSoFar(num);
    }, [hours])


    useEffect(() => {
        reportHours(username, hours);
    }, [hours])

    const getTime = (time) => {
        return `${time.getHours()}:${time.getMinutes()}`;
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
        setHours([...hours, {date: parseDate(date), startTime: startTime, endTime: endTime }])
    }

    const getHoursDiff = (startTime, endTime) => {
        const timeStart = new Date("01/01/2007 " + startTime).getHours();
        const timeEnd = new Date("01/01/2007 " + endTime).getHours();
        return timeEnd - timeStart;
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
                    </Row>
                </HeaderWrapper>
                {hours.map(hour => <Item>
                    <div>{hour.date}</div>
                    <div>{hour.startTime}</div>
                    <div>{hour.endTime}</div>
                    {getHoursDiff(hour.startTime, hour.endTime)}
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
                            renderInput={(props) => <TextField {...props} />}
                            label="בחר שעת התחלה"
                            value={start}
                            onChange={(newValue) => {
                                setStart(newValue);
                            }}
                        />
                        <TimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="בחר שעת סיום"
                            value={end}
                            onChange={(newValue) => {
                                setEnd(newValue);
                            }}
                        />
                    </LocalizationProvider>
                </Row>
            </Container>
            <Center>
                <Button onClick={() => onAddHour(date,start,end)}>הוסף שעות</Button>
            </Center>
        </div>
    );
}

export default ReportHours;