import { create } from "zustand";

type FormValues = {
  name: string;
  email: string;
  treatmentType: string;
  numberOfPerson: string;
  timeTreatment: string;
  phoneNumber: string;
  services: string;
  serviceTime: string;
  servicePrice: number;
  priceDiscount: number;
};

// Define the state interface
interface ReservationState {
  selectedDate: Date | undefined; // State untuk menyimpan tanggal yang dipilih sebagai tipe Date
  selectedTime: string;
  name: string;
  email: string;
  treatmentType: string;
  numberOfPerson: string;
  timeTreatment: string;
  phoneNumber: string;
  services: string;
  serviceTime: string;
  servicePrice: number;
  priceDiscount: number;

  updateSelectedDate: (date: Date | undefined) => void; // Fungsi untuk memperbarui tanggal
  updateSelectedTime: (time: string) => void; // Fungsi untuk memperbarui tanggal
  updateReservation: (data: FormValues) => void;
}

// Create the Zustand store
const reservationData = create<ReservationState>((set) => ({
  selectedDate: undefined, // Nilai awal
  selectedTime: "", // Nilai awal
  name: "",
  email: "",
  treatmentType: "",
  numberOfPerson: "",
  timeTreatment: "",
  phoneNumber: "",
  services: "",
  serviceTime: "",
  servicePrice: 0,
  priceDiscount: 0,

  updateSelectedDate: (date) => set({ selectedDate: date }), // Metode untuk mengubah state
  updateSelectedTime: (time) => set({ selectedTime: time }), // Metode untuk mengubah state
  updateReservation: (data) => set({ ...data }),
}));

export { reservationData };
