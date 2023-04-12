const nameDay = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
let startDate = new Date("2023-04-12"); // example
let endDate = new Date("2023-05-12"); // example
let totalWeekDay = 0;
let totalWeekEnd = 0;

const getTotalDay = (startDate, endDate) => {
    let selisih = endDate.getTime() - startDate.getTime();
    let totalDay = Math.ceil(selisih / (1000*3600*24));
    return totalDay;
}
let totalDay = getTotalDay(startDate, endDate) + 1;

console.log(`Start Date: ${startDate}`);
console.log(`End Date: ${endDate}`);
console.log(`Total Day: ${totalDay}\n`);

for (i=0; i<totalDay; i++) {
    const temp = new Date(startDate);
    temp.setDate(temp.getDate() + i);
    if (temp.getDay() === 0 || temp.getDay() === 6) {
        totalWeekEnd += 1;
        continue;
    }
    console.log(nameDay[temp.getDay()]);
    totalWeekDay += 1;
}

console.log(`\nTotal Weekday: ${totalWeekDay}`);
console.log(`Total Weekend: ${totalWeekEnd}`);