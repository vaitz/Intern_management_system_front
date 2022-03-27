import fetchMock from 'fetch-mock';
import {SERVER_ADDRESS} from '../../../config'

// fetchMock.mock(SERVER_ADDRESS+'/internships/123', [
//     {'companyName': 'רפאל','internshipName':'מפתח/ת צד לקוח', 'about':'אם אתם רוצים לעבוד עם טכנולוגיות פורצות-דרך ועם אנשים מבריקים, לשדרג את היכולות שלכם ולעסוק באתגרים משמעותיים, סימן שהעתיד שלכם ברפאל.',
//      'requirements':'התמודדות עם אתגרים משמעותיים בעולמות תוכן בחזית הטכנולוגיה, בליווי עובדי רפאל בשלוחת באר שבע. יכולת למידה עצמית, התמודדות עם אתגרים, עבודה בצוות.'},
//     {'companyName': 'רזיליון','internshipName':'מפתח/ת פול סטאק', 'about':'רזיליון בנתה מאגר נתונים המכיל מידע עבור יותר מ 2000 חבילות לינוקס נפוצות. מטרת הפרוייקט היא לנתח את המידע ולספק תובנות בנוגע לנוכחות של מנגנוני הגנה כנגד פגיעויות ובעיות נפוצות.',
//      'requirements':'רקע מוקדם בתחומים של אבטחת מידע, מערכות הפעלה, ניתוח סטטי ומחקר חולשות הם יתרון.'},
//     {'companyName': 'סיגמאביט','internshipName':'מפתח/ת צד שרת', 'about':'סיגמאביט מחפשת סטודנטים להתמחות בפיתוח מוצרים בעולמות התקשורת האלחוטית. במסגרת התפקיד תצטרף לצוות ההנדסה של החברה הפועל בתחומי הנדסת מערכת, פיתוח, ניהול בדיקות ואוטומציה ועוד. כמתמחה תיקח חלק פעיל בפיתוח מערכות ומוצרים מובילים של החברה.',
//      'requirements':'ידע בסיסי ב Linux ,C/c++ , C#/java/java script -ייתרון'},
// ]);

export const getInternships = (program, setInternships) => {
    fetch(SERVER_ADDRESS+'/internships/'+program,
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
            response.json().then(data => {
                setInternships(data);
            });
        }).catch(error => {
            console.log("error");
        });
}