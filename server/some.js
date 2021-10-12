// some
const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");
const numbers = [1,2,3,4]

let rta = false

//for (let index = 0; index < numbers.length; index++) {
//    const element = numbers[index];
//    if (element % 2 === 0) {
//        rta = true
//        break
//    }
//}

rta2 = numbers.some(item => item % 2 === 0)
console.log('rta2 : ' , rta2 );

const orders = [
    {
        customerName: 'Jesus',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Juan',
        total: 90,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 161,
        delivered: true
    },
    {
        customerName: 'Antonia',
        total: 690,
        delivered: true
    }
]

const rta3 = orders.some(item => item.delivered)
console.log('rta3 : ' , rta3 );

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1,9, 30),
};

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};

console.log('isOverlap: ', isOverlap(newAppointment));
