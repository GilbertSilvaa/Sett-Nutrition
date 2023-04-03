
export function formatDate(date: Date) {
  const [today, yesterday] = [
    new Date(),
    new Date(new Date().setDate(new Date().getDate() - 1))
  ];

  if(today.toDateString() == date.toDateString()) return 'Hoje';

  if(yesterday.toDateString() == date.toDateString()) return 'Ontem';

  let [day, month, year] = [
    date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate(),
    date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1,
    date.getFullYear()
  ]
  return `${day}/${month}/${year}`;
}