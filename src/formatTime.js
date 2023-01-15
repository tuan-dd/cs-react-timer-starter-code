export const formatTime = (time) => {
   const getSeconds = time % 60 !== 0 ? `0${time % 60}`.slice(-2) : '00';

   const minutes =
      parseInt(time / 60) === 0 ? '00' : `0${parseInt(time / 60)}`.slice(-2);
   const getMinutes = minutes < 60 && minutes > 0 ? minutes : '00';
   const getHours =
      parseInt(time / 3600) === 0 ? '00' : `0${parseInt(time / 3600)}`.slice(-2);

   return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
export default formatTime;
