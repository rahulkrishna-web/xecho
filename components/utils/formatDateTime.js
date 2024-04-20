// utils/formatDateTime.js
export function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const now = new Date();
  
    const diffMs = now - dateTime;
    const diffMinutes = Math.round(diffMs / (1000 * 60));
    const diffHours = Math.round(diffMinutes / 60);
  
    if (diffMinutes < 60) {
      return `${diffMinutes} minutes ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else {
      return `${dateTime.getDate()} ${getMonthName(dateTime.getMonth())}`;
    }
  }
  
  function getMonthName(month) {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[month];
  }
  