// import instance from "./axios";


// const api_uri = "http://localhost:8181";


// export const  delid = (bookingId) => instance.delete(`${api_uri}/api/v1/users/book/${bookingId}`);


// export const put = (bookingId) =>  instance.put(`${api_uri}/api/v1/users/book/${bookingId}`);
// import instance from "./axios";

// const api_uri = "http://localhost:8181";

// export const delid = (bookingId) => instance.delete(`${api_uri}/api/v1/users/book/${bookingId}`);

// export const putBooking = (bookingId, updatedBookingData) => instance.put(`${api_uri}/api/v1/users/book/${bookingId}`, updatedBookingData);
import instance from "./axios";

const api_uri = "http://localhost:8181";

export const delid = (bookingId) => instance.delete(`${api_uri}/api/v1//book/${bookingId}`);

export const putBooking = (bookingId, updatedBookingData) => instance.put(`${api_uri}/api/v1/book/api/v1/book/${bookingId}`, updatedBookingData);

// export const getBooking = (bookingId) => instance.get(`${api_uri}/api/v1/users/book/${bookinbookgId}`);
