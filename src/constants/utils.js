import emailjs from 'emailjs-com';

export const capitalizeCase = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);
export const sendEmailMessage = (formData = {}) => emailjs.sendForm('service_jehsv7y', 'template_8819peq', formData, 'user_UT6nBSGGl0ObZLRHKuqSA');

