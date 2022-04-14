exports.Helper = class Helper {
  yesterday() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    date = date.toDateString();
    return date;
  }

  formatCalendar(date) {
    let arrayDate = date.split(" ");
    let day = arrayDate[2] + ", ";
    let month = arrayDate[1] + " ";
    let year = arrayDate[3];
    return month + day + year;
  }

  formatDateEndContract(date) {
    let arrayDate = date.split(" ");
    let day = arrayDate[2] + "th, ";
    let month = arrayDate[1].toLowerCase() + " ";
    let year = arrayDate[3];
    return month + day + year;
  }
};
