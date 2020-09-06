import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://leandropaz-api-grades.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
