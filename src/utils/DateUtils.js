export function convertDate(date) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    return [date.getFullYear(), pad(date.getMonth()+1), pad(date.getDate())].join('-');
  }