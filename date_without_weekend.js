const weekday = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
let startDate = new Date("2023-04-12"); // example
let endDate = new Date("2023-05-12"); // example
let totalWeekDay = 0;
let totalWeekEnd = 0;

const getTotalDay = (startDate, endDate) => {
    let selisih = endDate.getTime() - startDate.getTime();
    let totalDay = Math.ceil(selisih / (1000*3600*24));
    return totalDay;
}
totalDay = getTotalDay(startDate, endDate) + 1;

console.log(`Start Date: ${startDate}`);
console.log(`End Date: ${endDate}`);
console.log(`Total Day: ${totalDay}\n`);

for (i=0; i<totalDay; i++) {
    startDate.setDate(startDate.getDate() + i)
    if (startDate.getDay() === 0 || startDate.getDay() === 6) {
        startDate.setDate(startDate.getDate() - i)
        totalWeekEnd += 1;
        continue;
    }
    console.log(weekday[startDate.getDay()])
    startDate.setDate(startDate.getDate() - i)
    totalWeekDay += 1;
}

console.log(`\nTotal Weekday: ${totalWeekDay}`);
console.log(`Total Weekend: ${totalWeekEnd}`);