import axios from 'axios';

const api = axios.create({
  baseURL: '/api', 
});

export interface PaymentPayload {
  amount: number;
  order_id: string;
  description: string;
  currency: string;
  language: string;
  client_ip: string;
}

export const paymentApi = {
  createPayment: (data: PaymentPayload) => 
    api.post('/payment/create', data),
    
  checkStatus: (paymentId: string) => 
    api.get(`/payment/status/${paymentId}`),
};