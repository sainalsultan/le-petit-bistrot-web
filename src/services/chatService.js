import { API_BASE_URL, API_ENDPOINTS } from '../config/api';

const CHAT_URL    = `${API_BASE_URL}${API_ENDPOINTS.chat}`;
const BOOKING_URL = `${API_BASE_URL}${API_ENDPOINTS.bookings}`;

export async function sendChatRequest(payload) {
  const response = await fetch(CHAT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      error.error?.message || `HTTP ${response.status}`
    );
  }

  return response;
}

export async function sendBookingRequest(bookingData) {
  const response = await fetch(BOOKING_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      error.error?.message || `HTTP ${response.status}`
    );
  }

  return response;
}