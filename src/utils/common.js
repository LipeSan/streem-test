import moment from 'moment';

const convertDate = (date) => {
  if(date){
    return moment(date).fromNow();
  }
}

export default {
  convertDate
}