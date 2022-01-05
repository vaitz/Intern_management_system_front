import {useState} from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import styled from "styled-components";
import {Typography} from "@mui/material";

const Label =  styled.text`
  font-size: 18px;
  color: #666666;
  margin: 20px 0 30px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  flex-direction: row;
`

const Separator = styled.div`
  margin-left: 20px;
`

const ReportHours =() =>  {
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const getHoursDiff = (date1, date2) => {
        const diffTime = Math.abs(date2 - date1);
        console.log(diffTime + " milliseconds");
    }

    return (
        <div dir="rtl">
            <Container>
                <Label>השעות שלי:</Label>
                <Row>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="בחר תאריך ושעה"
                            value={start}
                            onChange={(newValue) => {
                                setStart(newValue);
                            }}
                        />
                    </LocalizationProvider>
                    <Separator/>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="בחר תאריך ושעה"
                            value={end}
                            onChange={(newValue) => {
                                setEnd(newValue);
                            }}
                        />
                    </LocalizationProvider>
                </Row>
            </Container>
        </div>
    );
}

export default ReportHours;