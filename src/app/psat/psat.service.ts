import { Injectable } from '@angular/core';
import { PSAT } from '../shared/models/psat';

@Injectable()
export class PsatService {

  constructor() { }

  getNewPsat(){
    let newPsat: PSAT = {
      assessment: {
        type: 'PSAT',
        filePath: '',
        date: new Date(),
        name: 'PSAT Name'
      },
      pump_style: null,
      pump_specified: null,
      pump_rated_speed: null,
      drive: null,
      kinematic_viscosity: null,
      specific_gravity: null,
      stages: null,
      fixed_speed: null,
      line_frequency: null,
      motor_rated_power: null,
      motor_rated_speed: null,
      efficiency_class: null,
      efficiency: null,
      motor_rated_voltage: null,
      load_estimation_method: null,
      motor_rated_flc: null,
      full_load_amps: null,
      margin: null,
      operating_fraction: null,
      flow_rate: null,
      head: null,
      motor_field_power: null,
      motor_field_current: null,
      motor_field_voltage: null
    }
    return newPsat;
  }
}
