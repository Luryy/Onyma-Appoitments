import { uuid } from 'uuidv4';

import IAppointmentDTO from '@modules/appointments/dtos/IAppointmentDTO';

class Appointment {
  private _id: string;

  private _address: string;

  private _patientName: string;

  private _dateTime: string;

  private _state: 'scheduled' | 'closed' | 'canceled';

  constructor({
    id = uuid(),
    address,
    patientName,
    dateTime,
    state,
  }: IAppointmentDTO) {
    this._id = id;
    this._address = address;
    this._patientName = patientName;
    this._dateTime = dateTime;
    this._state = state;
  }

  get id(): string {
    return this._id;
  }

  get properties(): Omit<IAppointmentDTO, 'id'> {
    return {
      address: this._address,
      patientName: this._patientName,
      dateTime: this._dateTime,
      state: this._state,
    };
  }

  set properties({
    address,
    patientName,
    dateTime,
    state,
  }: Omit<IAppointmentDTO, 'id'>) {
    if (address) this._address = address;
    if (patientName) this._patientName = patientName;
    if (dateTime) this._dateTime = dateTime;
    if (state) this._state = state;
  }

  static update(
    appointment: Partial<Omit<IAppointmentDTO, 'id'>>,
  ): Partial<Omit<IAppointmentDTO, 'id'>> {
    let update_appointemnt = {};
    if (appointment.address)
      update_appointemnt = {
        ...update_appointemnt,
        address: appointment.address,
      };
    if (appointment.patientName)
      update_appointemnt = {
        ...update_appointemnt,
        patientName: appointment.patientName,
      };
    if (appointment.dateTime)
      update_appointemnt = {
        ...update_appointemnt,
        dateTime: appointment.dateTime,
      };
    if (appointment.state)
      update_appointemnt = {
        ...update_appointemnt,
        state: appointment.state,
      };

    return update_appointemnt;
  }
}

export default Appointment;
