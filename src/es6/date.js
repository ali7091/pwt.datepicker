/**
 * Date helper, some useful date method stored here
 * @class
 */
class DateUtil {

    /**
     * check if a date is same as b
     * @param dateA
     * @param dateB
     * @return {boolean}
     * @static
     */
    isSameDay(dateA, dateB) {
        return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    }


    /**
     * @desc check if a month is same as b
     * @param {Date} dateA
     * @param {Date} dateB
     * @return {boolean}
     * @static
     */
    isSameMonth(dateA, dateB) {
        return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    }


    /**
     * @desc normalize time, like check second if bigger than 60
     * @param {string} key
     * @param {number} value
     * @return {number}
     * @static
     */
    normalizeTime(key, value) {
        let output = value;
        if (key == 'hour') {
            if (value < 0) {
                output = 23;
            } else if (value > 23) {
                output = 0;
            }
        }
        else if (key == 'minute' || key == 'second') {
            if (value < 0) {
                output = 59;
            } else if (value > 59) {
                output = 0;
            }
        }
        return output;
    }
}
