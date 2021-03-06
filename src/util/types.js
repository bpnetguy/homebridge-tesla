// @flow

export type Vehicle = {
  id: number,
  vehicle_id: number,
  vin: string,
  display_name: string,
  option_codes: string,
  color: any,
  tokens: string[],
  state: 'online' | 'asleep',
  in_service: bool,
  id_s: string,
  calendar_enabled: bool,
  api_version: number,
  backseat_token: any,
  backseat_token_updated_at: any,
};

const ExampleVehicleResponse = {
  id: 18428374682376423,
  vehicle_id: 237642873,
  vin: '5YJ3E1EB2382738',
  display_name: 'My Model 3',
  option_codes: 'AD15,MDL3,PBSB,RENA,BT37,ID3W,RF3G,S3PB,DRLH,DV2W,W39B,APF0,COUS,BC3B,CH07,PC30,FC3P,FG31,GLFR,HL31,HM31,IL31,LTPB,MR31,FM3B,RS3H,SA3P,STCP,SC04,SU3C,T3CA,TW00,TM00,UT3P,WR00,AU3P,APH3,AF00,ZCST,MI00,CDM0',
  color: null,
  tokens: [ '0324924232f57412', '38f9a2823c3ce123' ],
  state: 'online',
  in_service: false,
  id_s: '18428374682376423',
  calendar_enabled: true,
  api_version: 4,
  backseat_token: null,
  backseat_token_updated_at: null,
};

export type VehicleState = {
  api_version: number,
  autopark_state_v3: 'standby' | string,
  autopark_style: 'dead_man' | string,
  calendar_supported: boolean,
  car_version: string,
  center_display_state: number,
  df: number,
  dr: number,
  ft: number,
  homelink_nearby: boolean,
  is_user_present: boolean,
  last_autopark_error: 'no_error',
  locked: boolean,
  media_state: { remote_control_enabled: boolean },
  notifications_supported: boolean,
  odometer: number,
  parsed_calendar_supported: boolean,
  pf: number,
  pr: number,
  remote_start: boolean,
  remote_start_supported: boolean,
  rt: number,
  software_update: {
    expected_duration_sec: number,
    status: string,
  },
  speed_limit_mode: {
    active: boolean,
    current_limit_mph: number,
    max_limit_mph: number,
    min_limit_mph: number,
    pin_code_set: boolean,
  },
  sun_roof_percent_open: null,
  sun_roof_state: 'unknown' | string,
  timestamp: number,
  valet_mode: boolean,
  valet_pin_needed: boolean,
  vehicle_name: 'My Model 3',
};

const ExampleVehicleStateResponse = {
  api_version: 4,
  autopark_state_v3: 'standby',
  autopark_style: 'dead_man',
  calendar_supported: true,
  car_version: '2018.42.3 eb373a0',
  center_display_state: 4,
  df: 0,
  dr: 0,
  ft: 0,
  homelink_nearby: false,
  is_user_present: true,
  last_autopark_error: 'no_error',
  locked: true,
  media_state: { remote_control_enabled: true },
  notifications_supported: true,
  odometer: 3666.991197,
  parsed_calendar_supported: true,
  pf: 0,
  pr: 0,
  remote_start: false,
  remote_start_supported: true,
  rt: 0,
  software_update: { expected_duration_sec: 2700, status: '' },
  speed_limit_mode:
   { active: false,
     current_limit_mph: 85,
     max_limit_mph: 90,
     min_limit_mph: 50,
     pin_code_set: false },
  sun_roof_percent_open: null,
  sun_roof_state: 'unknown',
  timestamp: 1542322919181,
  valet_mode: false,
  valet_pin_needed: true,
  vehicle_name: 'My Model 3',
};

export type ClimateState = {
  battery_heater: bool,
  battery_heater_no_power: any,
  driver_temp_setting: number,
  fan_status: number,
  inside_temp: number,
  is_auto_conditioning_on: bool,
  is_climate_on: bool,
  is_front_defroster_on: bool,
  is_preconditioning: bool,
  is_rear_defroster_on: bool,
  left_temp_direction: number,
  max_avail_temp: number,
  min_avail_temp: number,
  outside_temp: number,
  passenger_temp_setting: number,
  right_temp_direction: number,
  seat_heater_left: bool,
  seat_heater_rear_center: bool,
  seat_heater_rear_left: bool,
  seat_heater_rear_left_back: number,
  seat_heater_rear_right: bool,
  seat_heater_rear_right_back: number,
  seat_heater_right: bool,
  side_mirror_heaters: bool,
  smart_preconditioning: bool,
  steering_wheel_heater: bool,
  timestamp: number,
  wiper_blade_heater: bool,
}

const ExampleClimateStateResponse: ClimateState = {
  battery_heater: false,
  battery_heater_no_power: null,
  driver_temp_setting: 22.2,
  fan_status: 0,
  inside_temp: 12.9,
  is_auto_conditioning_on: false,
  is_climate_on: false,
  is_front_defroster_on: false,
  is_preconditioning: false,
  is_rear_defroster_on: false,
  left_temp_direction: 867,
  max_avail_temp: 28,
  min_avail_temp: 15,
  outside_temp: 11,
  passenger_temp_setting: 22.2,
  right_temp_direction: 867,
  seat_heater_left: false,
  seat_heater_rear_center: false,
  seat_heater_rear_left: false,
  seat_heater_rear_left_back: 0,
  seat_heater_rear_right: false,
  seat_heater_rear_right_back: 0,
  seat_heater_right: false,
  side_mirror_heaters: false,
  smart_preconditioning: false,
  steering_wheel_heater: false,
  timestamp: 1542321649472,
  wiper_blade_heater: false,
};
