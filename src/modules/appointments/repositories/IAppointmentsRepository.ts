import IAppointmentDTO from '../dtos/IAppointmentDTO';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IUpdateAppointmentDTO from '../dtos/IUpdataAppoinmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<IAppointmentDTO>;
  findById(id: string): Promise<IAppointmentDTO>;
  findAll(): Promise<IAppointmentDTO[]>;
  update(appointment: IUpdateAppointmentDTO): Promise<IAppointmentDTO>;
  delete(id: string): Promise<void>;
}
